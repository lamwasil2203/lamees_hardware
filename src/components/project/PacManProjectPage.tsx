"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/types/project";
import { PacManLoader } from "./PacManLoader";

// ─── palette ──────────────────────────────────────────────────────────────────
const BG = "#000814";
const WALL = "#3355FF";
const YELLOW = "#FFD700";
const WHITE = "#FFFFFF";
const GHOST_RED = "#FF4444";
const GHOST_PINK = "#FFB8FF";
const GHOST_CYAN = "#44EEFF";
const GHOST_ORG = "#FFB852";
const DIM = "rgba(255,255,255,0.55)";

// ─── small reusable shapes ────────────────────────────────────────────────────
function Ghost({
  color,
  size = 36,
  style,
}: {
  color: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  const h = Math.round(size * 1.1);
  const r = size / 2;
  return (
    <div style={style}>
      <svg width={size} height={h} viewBox={`0 0 ${size} ${h}`}>
        <path
          d={`M0,${h} Q0,0 ${r},0 Q${size},0 ${size},${h}
              Q${Math.round(size * 0.84)},${Math.round(h * 0.86)} ${Math.round(size * 0.72)},${h}
              Q${Math.round(size * 0.58)},${Math.round(h * 0.86)} ${r},${h}
              Q${Math.round(size * 0.42)},${Math.round(h * 0.86)} ${Math.round(size * 0.28)},${h}
              Q${Math.round(size * 0.16)},${Math.round(h * 0.86)} 0,${h} Z`}
          fill={color}
        />
        <circle
          cx={Math.round(size * 0.33)}
          cy={Math.round(h * 0.4)}
          r={Math.round(size * 0.18)}
          fill="white"
        />
        <circle
          cx={Math.round(size * 0.35)}
          cy={Math.round(h * 0.42)}
          r={Math.round(size * 0.09)}
          fill="#111"
        />
        <circle
          cx={Math.round(size * 0.67)}
          cy={Math.round(h * 0.4)}
          r={Math.round(size * 0.18)}
          fill="white"
        />
        <circle
          cx={Math.round(size * 0.69)}
          cy={Math.round(h * 0.42)}
          r={Math.round(size * 0.09)}
          fill="#111"
        />
      </svg>
    </div>
  );
}

function PacDot({ size = 8 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: YELLOW,
        marginInline: 4,
        verticalAlign: "middle",
        flexShrink: 0,
      }}
    />
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "'Courier New', monospace",
        fontSize: "0.7rem",
        fontWeight: "bold",
        letterSpacing: "0.25em",
        color: YELLOW,
        textTransform: "uppercase",
        marginBottom: "1.5rem",
      }}
    >
      <PacDot size={7} />
      {text}
      <PacDot size={7} />
    </div>
  );
}

function MazeCard({
  children,
  glowColor = WALL,
}: {
  children: React.ReactNode;
  glowColor?: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `2px solid ${glowColor}`,
        borderRadius: 6,
        padding: "2rem 2.5rem",
        marginBottom: "2rem",
        boxShadow: `0 0 18px rgba(51,85,255,0.2), inset 0 0 0 1px rgba(51,85,255,0.1)`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Hero maze banner ─────────────────────────────────────────────────────────
function MazeHero({ title, number, date, tags }: { title: string; number: string; date: string; tags: string[] }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: BG,
        border: `3px solid ${WALL}`,
        borderRadius: 6,
        overflow: "hidden",
        marginBottom: "2.5rem",
      }}
    >
      {/* SVG maze playfield */}
      <svg
        viewBox="0 0 900 380"
        width="100%"
        style={{ display: "block", maxHeight: 380 }}
        aria-hidden="true"
      >
        {/* BG */}
        <rect width="900" height="380" fill={BG} />

        {/* Maze walls */}
        <rect x="0" y="0" width="900" height="380" fill="none" stroke={WALL} strokeWidth="4" />

        {/* Top wall segments */}
        <rect x="40" y="50" width="150" height="7" fill={WALL} rx="3" />
        <rect x="250" y="50" width="400" height="7" fill={WALL} rx="3" />
        <rect x="710" y="50" width="150" height="7" fill={WALL} rx="3" />

        {/* Left boxes */}
        <rect x="40" y="90" width="80" height="7" fill={WALL} rx="2" />
        <rect x="40" y="90" width="7" height="70" fill={WALL} rx="2" />
        <rect x="40" y="153" width="80" height="7" fill={WALL} rx="2" />
        <rect x="113" y="90" width="7" height="70" fill={WALL} rx="2" />

        <rect x="180" y="90" width="110" height="7" fill={WALL} rx="2" />
        <rect x="180" y="90" width="7" height="70" fill={WALL} rx="2" />
        <rect x="180" y="153" width="110" height="7" fill={WALL} rx="2" />
        <rect x="283" y="90" width="7" height="70" fill={WALL} rx="2" />

        {/* Right boxes */}
        <rect x="780" y="90" width="80" height="7" fill={WALL} rx="2" />
        <rect x="780" y="90" width="7" height="70" fill={WALL} rx="2" />
        <rect x="780" y="153" width="80" height="7" fill={WALL} rx="2" />
        <rect x="853" y="90" width="7" height="70" fill={WALL} rx="2" />

        <rect x="617" y="90" width="110" height="7" fill={WALL} rx="2" />
        <rect x="617" y="90" width="7" height="70" fill={WALL} rx="2" />
        <rect x="617" y="153" width="110" height="7" fill={WALL} rx="2" />
        <rect x="720" y="90" width="7" height="70" fill={WALL} rx="2" />

        {/* Ghost house */}
        <rect x="360" y="140" width="180" height="100" fill="none" stroke="#FF69B4" strokeWidth="3" rx="3" />
        <rect x="420" y="140" width="60" height="5" fill="#FFB8FF" />

        {/* Bottom wall segments */}
        <rect x="40" y="300" width="150" height="7" fill={WALL} rx="3" />
        <rect x="250" y="300" width="400" height="7" fill={WALL} rx="3" />
        <rect x="710" y="300" width="150" height="7" fill={WALL} rx="3" />

        {/* Middle channel walls */}
        <rect x="40" y="200" width="180" height="7" fill={WALL} rx="3" />
        <rect x="680" y="200" width="180" height="7" fill={WALL} rx="3" />

        {/* Dots row */}
        {[30, 110, 175, 240, 305, 450, 595, 660, 725, 790, 860].map((x, i) => (
          <circle key={i} cx={x} cy="190" r={i === 0 || i === 10 ? 9 : 5} fill={YELLOW} />
        ))}

        {/* Pac-Man */}
        <path d="M115,190 L140,172 A28,28 0 1,0 140,208 Z" fill={YELLOW} />

        {/* Ghosts in ghost house */}
        {/* Blinky */}
        <g transform="translate(382,157)">
          <path d="M0,36 Q0,0 18,0 Q36,0 36,36 Q30,30 24,36 Q18,30 18,36 Q12,30 6,36 Q2,30 0,36 Z" fill="#FF4444" />
          <circle cx="11" cy="15" r="6" fill="white" /><circle cx="12" cy="16" r="3" fill="#111" />
          <circle cx="25" cy="15" r="6" fill="white" /><circle cx="26" cy="16" r="3" fill="#111" />
        </g>
        {/* Pinky */}
        <g transform="translate(432,157)">
          <path d="M0,36 Q0,0 18,0 Q36,0 36,36 Q30,30 24,36 Q18,30 18,36 Q12,30 6,36 Q2,30 0,36 Z" fill="#FFB8FF" />
          <circle cx="11" cy="15" r="6" fill="white" /><circle cx="12" cy="16" r="3" fill="#111" />
          <circle cx="25" cy="15" r="6" fill="white" /><circle cx="26" cy="16" r="3" fill="#111" />
        </g>
        {/* Inky */}
        <g transform="translate(482,157)">
          <path d="M0,36 Q0,0 18,0 Q36,0 36,36 Q30,30 24,36 Q18,30 18,36 Q12,30 6,36 Q2,30 0,36 Z" fill="#44EEFF" />
          <circle cx="11" cy="15" r="6" fill="white" /><circle cx="12" cy="16" r="3" fill="#111" />
          <circle cx="25" cy="15" r="6" fill="white" /><circle cx="26" cy="16" r="3" fill="#111" />
        </g>

        {/* Score text */}
        <text x="450" y="360" textAnchor="middle" fill={YELLOW} fontFamily="Courier New, monospace" fontSize="16" fontWeight="bold" letterSpacing="4">
          {number} · {date.toUpperCase()} · {tags.join(" / ").toUpperCase()}
        </text>
      </svg>

      {/* Overlaid project title */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem 2rem",
          background: "linear-gradient(to top, rgba(0,8,20,0.95) 60%, transparent)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
            fontWeight: "bold",
            color: YELLOW,
            margin: 0,
            letterSpacing: "0.05em",
            textShadow: `0 0 20px rgba(255,215,0,0.5)`,
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

// ─── Arcade score bar ─────────────────────────────────────────────────────────
function ArcadeBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Courier New', monospace",
        fontSize: "0.75rem",
        letterSpacing: "0.2em",
        color: WHITE,
        marginBottom: "1.5rem",
        padding: "0.6rem 1rem",
        border: `1px solid ${WALL}`,
        borderRadius: 4,
        background: "rgba(51,85,255,0.06)",
      }}
    >
      <span style={{ color: WHITE, opacity: 0.6 }}>1 UP</span>
      <span style={{ color: YELLOW }}>PLAYER 1</span>
      <span style={{ color: WHITE, opacity: 0.6 }}>HIGH SCORE: 9999</span>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
interface PacManProjectPageProps {
  project: Project;
  nextProject?: Project;
}

export function PacManProjectPage({
  project,
  nextProject,
}: PacManProjectPageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Keyframes for ghost float animation */}
      <style>{`
        @keyframes pm-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes pm-float2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pm-pulse {
          0%, 100% { opacity: 0.08; }
          50%       { opacity: 0.18; }
        }
      `}</style>

      {/* Pac-Man loading screen */}
      {loading && <PacManLoader onComplete={() => setLoading(false)} />}

      {/* Page content — hidden until loader finishes */}
      <div
        style={{
          backgroundColor: BG,
          minHeight: "100vh",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: loading ? "none" : "auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle dot-grid background pattern */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(51,85,255,0.18) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            animation: "pm-pulse 4s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Floating ghosts (decorative) */}
        <Ghost
          color={GHOST_RED}
          size={52}
          style={{
            position: "fixed",
            top: 90,
            right: 24,
            animation: "pm-float 4s ease-in-out infinite",
            opacity: 0.12,
            zIndex: 1,
          }}
        />
        <Ghost
          color={GHOST_CYAN}
          size={44}
          style={{
            position: "fixed",
            bottom: 120,
            left: 18,
            animation: "pm-float2 3.5s ease-in-out 0.8s infinite",
            opacity: 0.1,
            zIndex: 1,
          }}
        />
        <Ghost
          color={GHOST_PINK}
          size={38}
          style={{
            position: "fixed",
            top: "45%",
            right: 10,
            animation: "pm-float 5s ease-in-out 1.2s infinite",
            opacity: 0.08,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "6rem 3rem 5rem",
          }}
        >
          <ArcadeBar />

          {/* Hero maze */}
          <MazeHero
            title={project.title}
            number={`PROJECT ${project.number}`}
            date={project.date}
            tags={project.tags}
          />

          {/* Lead */}
          <p
            style={{
              color: DIM,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: "3rem",
              fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
            }}
          >
            {project.lead}
          </p>

          {/* Dot divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: "2.5rem",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <PacDot key={i} size={i % 4 === 0 ? 10 : 6} />
            ))}
          </div>

          {/* Sections */}
          {project.sections.map((section, i) => {
            switch (section.type) {
              case "overview":
                return (
                  <MazeCard key={i}>
                    <SectionLabel text={section.label ?? "Overview"} />
                    {section.largeParagraph && (
                      <p
                        style={{
                          color: WHITE,
                          fontSize: "1.2rem",
                          lineHeight: 1.65,
                          marginBottom: "1rem",
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        }}
                      >
                        {section.largeParagraph}
                      </p>
                    )}
                    {section.paragraphs?.map((p, j) => (
                      <p
                        key={j}
                        style={{
                          color: DIM,
                          lineHeight: 1.75,
                          marginBottom: "0.75rem",
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </MazeCard>
                );

              case "reflection":
                return (
                  <MazeCard key={i} glowColor={GHOST_PINK}>
                    <SectionLabel text={section.label ?? "Reflection"} />
                    <blockquote
                      style={{
                        borderLeft: `4px solid ${GHOST_PINK}`,
                        paddingLeft: "1.5rem",
                        margin: 0,
                      }}
                    >
                      <p
                        style={{
                          color: WHITE,
                          fontSize: "1.05rem",
                          lineHeight: 1.75,
                          fontFamily: "var(--font-body, 'DM Sans', sans-serif)",
                          opacity: 0.9,
                        }}
                      >
                        {section.quote}
                      </p>
                    </blockquote>
                  </MazeCard>
                );

              case "takeaways":
                return (
                  <div key={i} style={{ marginBottom: "2rem" }}>
                    <SectionLabel text={section.label ?? "Key Takeaways"} />
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1rem",
                      }}
                    >
                      {section.takeaways?.map((t, j) => {
                        const colors = [GHOST_RED, GHOST_PINK, GHOST_ORG];
                        const ghosts = [
                          <Ghost key="g" color={GHOST_RED} size={28} />,
                          <Ghost key="g" color={GHOST_PINK} size={28} />,
                          <Ghost key="g" color={GHOST_ORG} size={28} />,
                        ];
                        return (
                          <div
                            key={j}
                            style={{
                              border: `2px solid ${colors[j % 3]}`,
                              borderRadius: 6,
                              padding: "1.25rem 1.5rem",
                              background: "rgba(255,255,255,0.03)",
                              boxShadow: `0 0 14px rgba(${j === 0 ? "255,68,68" : j === 1 ? "255,184,255" : "255,184,82"},0.12)`,
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: "0.75rem",
                              }}
                            >
                              {ghosts[j % 3]}
                              <span
                                style={{
                                  fontFamily: "'Courier New', monospace",
                                  fontSize: "0.75rem",
                                  fontWeight: "bold",
                                  color: colors[j % 3],
                                  letterSpacing: "0.2em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {t.label}
                              </span>
                            </div>
                            <p
                              style={{
                                color: DIM,
                                fontSize: "0.9rem",
                                lineHeight: 1.7,
                                margin: 0,
                                fontFamily:
                                  "var(--font-body, 'DM Sans', sans-serif)",
                              }}
                            >
                              {t.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );

              case "gallery":
                return (
                  <MazeCard key={i}>
                    <SectionLabel text={section.label ?? "Gallery"} />
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "1rem",
                      }}
                    >
                      {section.images?.map((img, j) => (
                        <div
                          key={j}
                          style={{
                            border: `1px solid ${WALL}`,
                            borderRadius: 4,
                            overflow: "hidden",
                            position: "relative",
                            aspectRatio: "4/3",
                            background: "rgba(51,85,255,0.06)",
                          }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.src}
                            alt={img.alt}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                          {img.caption && (
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: "0.4rem 0.6rem",
                                background: "rgba(0,8,20,0.85)",
                                fontFamily: "'Courier New', monospace",
                                fontSize: "0.7rem",
                                color: YELLOW,
                                letterSpacing: "0.1em",
                              }}
                            >
                              {img.caption}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </MazeCard>
                );

              case "video":
                return (
                  <MazeCard key={i}>
                    <SectionLabel text={section.label ?? "Demo"} />
                    <video
                      src={section.videoSrc}
                      controls
                      style={{
                        width: "100%",
                        border: `1px solid ${WALL}`,
                        borderRadius: 4,
                      }}
                    />
                  </MazeCard>
                );

              default:
                return null;
            }
          })}

          {/* ─── Navigation ─────────────────────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: `2px solid ${WALL}`,
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Link
              href="/#work"
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.8rem",
                color: YELLOW,
                textDecoration: "none",
                letterSpacing: "0.2em",
                border: `1px solid ${YELLOW}`,
                padding: "0.5rem 1rem",
                borderRadius: 4,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(255,215,0,0.1)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              ← BACK TO ALL PROJECTS
            </Link>

            <a
              href="https://github.com/lamwasil2203/esp32_pacman"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Courier New', monospace",
                fontSize: "0.8rem",
                color: GHOST_CYAN,
                textDecoration: "none",
                letterSpacing: "0.2em",
                border: `1px solid ${GHOST_CYAN}`,
                padding: "0.5rem 1rem",
                borderRadius: 4,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(68,238,255,0.1)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "transparent")
              }
            >
              {/* GitHub icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill={GHOST_CYAN} aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              VIEW SOURCE
            </a>

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.8rem",
                  color: WALL,
                  textDecoration: "none",
                  letterSpacing: "0.18em",
                  border: `1px solid ${WALL}`,
                  padding: "0.5rem 1rem",
                  borderRadius: 4,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "rgba(51,85,255,0.12)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "transparent")
                }
              >
                NEXT LEVEL →
              </Link>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
