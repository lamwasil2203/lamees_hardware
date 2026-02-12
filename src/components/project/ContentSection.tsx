import { ContentSection as ContentSectionType } from "@/types/project";

interface ContentSectionProps {
  section: ContentSectionType;
}

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <section className="grid grid-cols-[180px_1fr] gap-12 mb-16 max-md:grid-cols-1 max-md:gap-8">
      <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent sticky top-[120px] self-start max-md:static">
        {section.label}
      </div>
      <div className="max-w-[700px]">
        {section.largeParagraph && (
          <p className="text-[1.3rem] font-medium text-text mb-6 leading-[1.8]">
            {section.largeParagraph}
          </p>
        )}
        {section.paragraphs?.map((paragraph, i) => (
          <p
            key={i}
            className="text-[1.1rem] leading-[1.8] text-secondary mb-6"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
