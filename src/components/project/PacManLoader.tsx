"use client";

import { useEffect, useState, useCallback } from "react";

const TOTAL_DOTS = 12;
const DURATION_MS = 2800;
const CONTAINER_W = 480;
const PAC_SIZE = 40;

function PacManIcon({ mouthOpen }: { mouthOpen: boolean }) {
  const r = PAC_SIZE / 2;
  const halfAngle = mouthOpen ? 35 : 4;
  const rad = (halfAngle * Math.PI) / 180;
  const x1 = (r + r * Math.cos(-rad)).toFixed(2);
  const y1 = (r + r * Math.sin(-rad)).toFixed(2);
  const x2 = (r + r * Math.cos(rad)).toFixed(2);
  const y2 = (r + r * Math.sin(rad)).toFixed(2);
  const d = `M${r},${r} L${x1},${y1} A${r},${r} 0 1,0 ${x2},${y2} Z`;
  return (
    <svg width={PAC_SIZE} height={PAC_SIZE} viewBox={`0 0 ${PAC_SIZE} ${PAC_SIZE}`}>
      <path d={d} fill="#FFD700" />
    </svg>
  );
}

function GhostDeco({ color, style }: { color: string; style?: React.CSSProperties }) {
  return (
    <div style={{ position: "absolute", opacity: 0.25, ...style }}>
      <svg width="44" height="48" viewBox="0 0 44 48">
        <path
          d="M0,48 Q0,0 22,0 Q44,0 44,48 Q37,42 31,48 Q25,42 22,48 Q19,42 13,48 Q7,42 0,48 Z"
          fill={color}
        />
        <circle cx="15" cy="20" r="8" fill="white" />
        <circle cx="16" cy="21" r="4" fill="#111" />
        <circle cx="29" cy="20" r="8" fill="white" />
        <circle cx="30" cy="21" r="4" fill="#111" />
      </svg>
    </div>
  );
}

function BlinkText({ children }: { children: React.ReactNode }) {
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setVis((v) => !v), 600);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        fontSize: "1.05rem",
        color: "#FFFFFF",
        letterSpacing: "0.3em",
        opacity: vis ? 0.9 : 0,
        transition: "opacity 0.1s",
        marginBottom: "2.5rem",
      }}
    >
      {children}
    </div>
  );
}

interface PacManLoaderProps {
  onComplete: () => void;
}

export function PacManLoader({ onComplete }: PacManLoaderProps) {
  const [pacX, setPacX] = useState(-PAC_SIZE);
  const [mouthOpen, setMouthOpen] = useState(true);
  const [eatenCount, setEatenCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  const done = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;
    const travel = CONTAINER_W + PAC_SIZE * 2;
    const dotSpacing = CONTAINER_W / (TOTAL_DOTS + 1);

    const frame = (ts: number) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const x = -PAC_SIZE + travel * progress;

      setPacX(x);
      setMouthOpen(Math.floor(elapsed / 140) % 2 === 0);

      const eaten = Array.from({ length: TOTAL_DOTS }).filter(
        (_, i) => (i + 1) * dotSpacing <= x + PAC_SIZE * 0.6
      ).length;
      setEatenCount(eaten);

      if (progress < 1) {
        rafId = requestAnimationFrame(frame);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(done, 650);
        }, 350);
      }
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [done]);

  const dotSpacing = CONTAINER_W / (TOTAL_DOTS + 1);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000814",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: exiting ? 0 : 1,
        transition: exiting ? "opacity 0.65s ease" : "none",
      }}
    >
      {/* Decorative corner ghosts */}
      <GhostDeco color="#FF0000" style={{ top: 50, left: 50 }} />
      <GhostDeco color="#FFB8FF" style={{ top: 50, right: 60 }} />
      <GhostDeco color="#00FFFF" style={{ bottom: 70, left: 70 }} />
      <GhostDeco color="#FFB852" style={{ bottom: 70, right: 70 }} />

      {/* PAC-MAN title */}
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "clamp(2rem, 6vw, 3.8rem)",
          fontWeight: "bold",
          color: "#FFD700",
          letterSpacing: "0.5em",
          marginBottom: "0.5rem",
          textShadow:
            "0 0 24px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.3)",
        }}
      >
        PAC-MAN
      </div>

      <BlinkText>— INSERT COIN —</BlinkText>

      {/* Pac-Man eating row */}
      <div
        style={{
          position: "relative",
          width: CONTAINER_W,
          maxWidth: "88vw",
          height: PAC_SIZE,
        }}
      >
        {/* Dots */}
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => {
          const dotX = (i + 1) * dotSpacing;
          const eaten = i < eatenCount;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: dotX - 5,
                top: "50%",
                transform: `translateY(-50%) scale(${eaten ? 0 : 1})`,
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#FFD700",
                opacity: eaten ? 0 : 1,
                transition: "opacity 0.12s ease, transform 0.12s ease",
              }}
            />
          );
        })}

        {/* Pac-Man character */}
        <div
          style={{
            position: "absolute",
            left: pacX,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <PacManIcon mouthOpen={mouthOpen} />
        </div>
      </div>

      {/* Loading label */}
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.45em",
          marginTop: "2.2rem",
        }}
      >
        L O A D I N G . . .
      </div>

      {/* Points counter */}
      <div
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "0.8rem",
          color: "#FFD700",
          letterSpacing: "0.15em",
          marginTop: "0.8rem",
          opacity: 0.45,
        }}
      >
        {eatenCount * 10} PTS
      </div>
    </div>
  );
}
