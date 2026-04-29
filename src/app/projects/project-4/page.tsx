import { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { getAdjacentProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Keyboard Project — Lamees",
  description: "A custom keyboard build — from scratch, one key at a time.",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-[180px_1fr] gap-12 mb-16 max-md:grid-cols-1 max-md:gap-8">
      <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent sticky top-[120px] self-start max-md:static">
        {label}
      </div>
      <div>{children}</div>
    </section>
  );
}

function GridImage({ src, alt, caption, featured }: { src: string; alt: string; caption?: string; featured?: boolean }) {
  return (
    <div className="border-2 border-border overflow-hidden bg-border">
      <div className={`relative ${featured ? "aspect-video" : "aspect-[4/3]"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={featured ? "100vw" : "(max-width: 968px) 100vw, 50vw"}
        />
      </div>
      {caption && (
        <p className="py-3 px-4 text-[0.9rem] text-secondary italic bg-white">{caption}</p>
      )}
    </div>
  );
}

function VideoItem({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className="border-2 border-border overflow-hidden">
      <video controls className="w-full block" preload="metadata">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption && (
        <p className="py-3 px-4 text-[0.9rem] text-secondary italic bg-white">{caption}</p>
      )}
    </div>
  );
}

export default function KeyboardProjectPage() {
  const { next } = getAdjacentProjects("project-4");

  return (
    <article className="pt-20">
      {/* Hero */}
      <header className="max-w-[1400px] mx-auto pt-16 pb-0 px-12 max-md:px-8">
        <div className="w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-hidden mb-12 border-2 border-border relative max-md:h-[50vh] max-sm:h-[40vh] max-sm:min-h-[300px]">
          <Image
            src="/images/projects/project-4/IMG_8820.jpg"
            alt="Keyboard Project hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="max-w-[900px] mx-auto">
          <div className="flex gap-8 items-center mb-8 font-mono max-md:flex-col max-md:gap-6 max-md:items-start">
            <span className="font-mono text-[2rem] font-bold text-accent leading-none max-md:text-[4rem]">
              04
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-[0.8rem] text-secondary tracking-[2px] uppercase font-medium">
                April 2026
              </span>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block px-3 py-1 border border-border text-[0.75rem] font-mono tracking-[1px] uppercase text-secondary rounded-sm">
                  Hardware
                </span>
              </div>
            </div>
          </div>
          <h1 className="font-body text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-[1.2] mb-6 text-text max-sm:text-[2rem]">
            Keyboard Project
          </h1>
          <p className="text-[1.1rem] leading-[1.6] text-secondary font-normal mb-8">
            A custom keyboard build — from scratch, one key at a time.
          </p>
          <a
            href="https://github.com/lamwasil2203/piano_keyboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 border-2 border-border font-mono text-[0.8rem] tracking-[1px] uppercase text-text no-underline transition-all duration-300 hover:border-accent hover:text-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-12 pb-24 pt-16 max-md:px-8">

        <FadeIn>
          <Section label="Overview">
            <p className="text-[1.1rem] leading-[1.7] text-secondary font-body mb-4">
              This is an attempt to make a keyboard that produces sounds for different moods. The idea started with wanting to place copper tape underneath the keys, and I also brought some magnets so that each keyboard pin could move up and down with a satisfying click — but the magnets did not work.
            </p>
            <p className="text-[1.1rem] leading-[1.7] text-secondary font-body">
              Then when I placed the copper tape on the bottom of the keys, that did not work either. So I moved the copper tape to the top of the keys, and that is what you see here.
            </p>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section label="Key Mapping">
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[0.9rem] border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-2 pr-8 text-secondary font-bold tracking-[1px]">Key</th>
                    <th className="text-left py-2 pr-8 text-secondary font-bold tracking-[1px]">Note</th>
                    <th className="text-left py-2 pr-8 text-secondary font-bold tracking-[1px]">GPIO</th>
                    <th className="text-left py-2 text-secondary font-bold tracking-[1px]">Touch Pin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { key: "0", note: "C", gpio: "2",  touch: "T2" },
                    { key: "1", note: "D", gpio: "13", touch: "T4" },
                    { key: "2", note: "E", gpio: "12", touch: "T5" },
                    { key: "3", note: "F", gpio: "14", touch: "T6" },
                    { key: "4", note: "G", gpio: "27", touch: "T7" },
                    { key: "5", note: "A", gpio: "33", touch: "T9" },
                    { key: "6", note: "B", gpio: "32", touch: "T8" },
                  ].map((row) => (
                    <tr key={row.key} className="border-b border-border">
                      <td className="py-2 pr-8 text-text">{row.key}</td>
                      <td className="py-2 pr-8 text-accent font-bold">{row.note}</td>
                      <td className="py-2 pr-8 text-text">{row.gpio}</td>
                      <td className="py-2 text-text">{row.touch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section label="Build">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <GridImage src="/images/projects/project-4/IMG_8796.jpg" alt="Early build stage" />
              <GridImage src="/images/projects/project-4/IMG_8797.jpg" alt="Keyboard wiring" />
              <GridImage src="/images/projects/project-4/IMG_8798.jpg" alt="Keyboard build" />
              <GridImage src="/images/projects/project-4/IMG_8799.jpg" alt="Keyboard build" />
              <div className="col-span-2 max-md:col-span-1">
                <GridImage src="/images/projects/project-4/IMG_8800.jpg" alt="Keyboard build overview" featured />
              </div>
            </div>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section label="Early Tests">
            <div className="flex flex-col gap-6">
              <VideoItem src="/images/projects/project-4/IMG_8801.mp4" caption="First touch test" />
              <VideoItem src="/images/projects/project-4/IMG_8802.mp4" caption="Second test" />
              <VideoItem src="/images/projects/project-4/IMG_8803.mp4" caption="Third test" />
            </div>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section label="Assembly">
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <GridImage src="/images/projects/project-4/IMG_8808.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8811.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8812.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8813.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8814.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8815.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8816.jpg" alt="Assembly" />
              <GridImage src="/images/projects/project-4/IMG_8819.jpg" alt="Assembly" />
              <div className="col-span-2 max-md:col-span-1">
                <GridImage src="/images/projects/project-4/IMG_8820.jpg" alt="Final keyboard" caption="The finished keyboard" featured />
              </div>
            </div>
          </Section>
        </FadeIn>

        <FadeIn>
          <Section label="Demo">
            <div className="flex flex-col gap-6">
              <VideoItem src="/images/projects/project-4/IMG_8807.mp4" caption="Keyboard in action" />
              <VideoItem src="/images/projects/project-4/IMG_8824.mp4" />
              <VideoItem src="/images/projects/project-4/IMG_8825.mp4" />
              <VideoItem src="/images/projects/project-4/IMG_8826.mp4" />
            </div>
          </Section>
        </FadeIn>

      </div>

      <ProjectNavigation next={next} />
    </article>
  );
}
