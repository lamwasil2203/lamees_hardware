import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white border border-border rounded-[4px] overflow-hidden transition-all duration-400"
      style={{ transitionTimingFunction: "var(--ease-smooth)" }}
    >
      <Link href={`/projects/${project.slug}`} className="no-underline text-inherit block">
        <div className="relative aspect-[3/2] overflow-hidden bg-border">
          <Image
            src={project.cardImage}
            alt={project.title}
            fill
            className="object-cover transition-opacity duration-400 group-hover:opacity-90"
            style={{ transitionTimingFunction: "var(--ease-smooth)" }}
            sizes="(max-width: 968px) 100vw, 900px"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4 text-[0.85rem] text-secondary tracking-[1px]">
            <span className="text-[0.9rem] font-bold text-secondary">
              {project.number}
            </span>
            <span>{project.dateShort}</span>
          </div>
          <h3 className="font-body text-[1.4rem] font-semibold mb-3 transition-colors duration-400 group-hover:text-accent"
            style={{ transitionTimingFunction: "var(--ease-smooth)" }}
          >
            {project.title}
          </h3>
          <p className="text-secondary leading-[1.7] mb-4">
            {project.excerpt}
          </p>
          <div className="flex gap-3 flex-wrap">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
