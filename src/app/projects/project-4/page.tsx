import { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { getAdjacentProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Keyboard Project — Lamees",
  description: "A custom keyboard build — from scratch, one key at a time.",
};

function VideoItem({
  src,
  label,
  subtitle,
}: {
  src: string;
  label?: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      {label && (
        <p className="font-mono text-[0.75rem] tracking-[2px] uppercase text-secondary mb-1">
          {label}
        </p>
      )}
      {subtitle && (
        <p className="font-body text-[1.3rem] font-semibold text-text mb-4">
          {subtitle}
        </p>
      )}
      <video
        controls
        className="w-full rounded-sm border-2 border-border"
        preload="metadata"
      >
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function ImageItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full rounded-sm border-2 border-border"
      />
    </div>
  );
}

export default function KeyboardProjectPage() {
  const { next } = getAdjacentProjects("project-4");

  return (
    <article className="pt-20">
      {/* Header */}
      <header className="max-w-[1400px] mx-auto pt-16 pb-0 px-12 max-md:px-8">
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

      {/* Media content */}
      <div className="max-w-[900px] mx-auto px-12 pb-24 pt-16 max-md:px-8">

        {/* IMG_8796 – IMG_8800 */}
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8796.jpg" alt="Keyboard build IMG_8796" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8797.jpg" alt="Keyboard build IMG_8797" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8798.jpg" alt="Keyboard build IMG_8798" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8799.jpg" alt="Keyboard build IMG_8799" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8800.jpg" alt="Keyboard build IMG_8800" /></FadeIn>

        {/* IMG_8801 – IMG_8803 */}
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8801.MOV" /></FadeIn>
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8802.MOV" /></FadeIn>
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8803.MOV" /></FadeIn>

        {/* IMG_8807.MOV — labeled */}
        <FadeIn>
          <VideoItem
            src="/images/projects/project-4/IMG_8807.MOV"
            label="(IMG_8807.MOV)"
            subtitle="Keyboard Project"
          />
        </FadeIn>

        {/* Text box */}
        <FadeIn>
          <section className="bg-white border-2 border-border p-8 mb-16 max-sm:px-6">
            <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent mb-6">
              About This Project
            </div>
            <p className="text-[1.1rem] leading-[1.7] text-text font-normal font-body mb-6">
              This is an attempt to make a keyboard that produces sounds for different moods. The idea started with wanting to place copper tape underneath the keys, and I also brought some magnets so that each keyboard pin could move up and down with a satisfying click — but the magnets did not work. Then when I placed the copper tape on the bottom of the keys, that did not work either. So I moved the copper tape to the top of the keys, and that is what you see here.
            </p>
            <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent mb-4">
              Key Mapping
            </div>
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
          </section>
        </FadeIn>

        {/* IMG_8808 – IMG_8820 */}
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8808.jpg" alt="Keyboard build IMG_8808" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8811.jpg" alt="Keyboard build IMG_8811" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8812.jpg" alt="Keyboard build IMG_8812" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8813.jpg" alt="Keyboard build IMG_8813" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8814.jpg" alt="Keyboard build IMG_8814" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8815.jpg" alt="Keyboard build IMG_8815" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8816.jpg" alt="Keyboard build IMG_8816" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8819.jpg" alt="Keyboard build IMG_8819" /></FadeIn>
        <FadeIn><ImageItem src="/images/projects/project-4/IMG_8820.jpg" alt="Keyboard build IMG_8820" /></FadeIn>

        {/* IMG_8824 – IMG_8826 */}
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8824.MOV" /></FadeIn>
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8825.MOV" /></FadeIn>
        <FadeIn><VideoItem src="/images/projects/project-4/IMG_8826.MOV" /></FadeIn>

      </div>

      <ProjectNavigation next={next} />
    </article>
  );
}
