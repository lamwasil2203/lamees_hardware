import { ContentSection } from "@/types/project";

interface VideoSectionProps {
  section: ContentSection;
}

export function VideoSection({ section }: VideoSectionProps) {
  return (
    <section className="grid grid-cols-[180px_1fr] gap-12 mb-16 max-md:grid-cols-1 max-md:gap-8">
      <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent sticky top-[120px] self-start max-md:static">
        {section.label}
      </div>
      <div className="max-w-[700px]">
        <video
          controls
          className="w-full rounded-sm border-2 border-border"
          preload="metadata"
        >
          <source src={section.videoSrc} type="video/quicktime" />
          <source src={section.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {section.videoCaption && (
          <p className="text-[0.9rem] text-secondary mt-3 text-center">
            {section.videoCaption}
          </p>
        )}
      </div>
    </section>
  );
}
