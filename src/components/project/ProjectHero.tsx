import Image from "next/image";
import { Project } from "@/types/project";
import { Tag } from "@/components/ui/Tag";

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="max-w-[1400px] mx-auto pt-16 pb-0 px-12 max-md:px-8">
      <div className="w-full h-[60vh] min-h-[400px] max-h-[700px] overflow-hidden mb-12 border-2 border-border relative max-md:h-[50vh] max-sm:h-[40vh] max-sm:min-h-[300px]">
        <Image
          src={project.heroImage}
          alt={`${project.title} hero image`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="flex gap-8 items-center mb-8 font-mono max-md:flex-col max-md:gap-6 max-md:items-start">
          <span className="font-mono text-[2rem] font-bold text-accent leading-none max-md:text-[4rem]">
            {project.number}
          </span>
          <div className="flex flex-col gap-2">
            <span className="text-[0.8rem] text-secondary tracking-[2px] uppercase font-medium">
              {project.date}
            </span>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
        </div>
        <h1 className="font-body text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-[1.2] mb-6 text-text max-sm:text-[2rem]">
          {project.title}
        </h1>
        <p className="text-[1.1rem] leading-[1.6] text-secondary font-normal">
          {project.lead}
        </p>
      </div>
    </header>
  );
}
