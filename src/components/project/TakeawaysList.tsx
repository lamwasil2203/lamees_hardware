import { ContentSection } from "@/types/project";

interface TakeawaysListProps {
  section: ContentSection;
}

export function TakeawaysList({ section }: TakeawaysListProps) {
  return (
    <section className="grid grid-cols-[180px_1fr] gap-12 mb-16 max-md:grid-cols-1 max-md:gap-8">
      <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent sticky top-[120px] self-start max-md:static">
        {section.label}
      </div>
      <div className="max-w-[700px] flex flex-col gap-8">
        {section.takeaways?.map((takeaway, i) => (
          <div
            key={i}
            className="p-6 bg-bg rounded-lg border-l-4 border-accent"
          >
            <strong className="block text-[1.2rem] text-text mb-2">
              {takeaway.title}
            </strong>
            <span className="block text-secondary leading-[1.6] mt-2">
              {takeaway.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
