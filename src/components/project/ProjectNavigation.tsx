import Link from "next/link";
import { Project } from "@/types/project";

interface ProjectNavigationProps {
  next: Project | undefined;
}

export function ProjectNavigation({ next }: ProjectNavigationProps) {
  return (
    <nav className="max-w-[1200px] mx-auto py-16 px-12 flex justify-between gap-8 border-t-2 border-border max-md:flex-col max-md:px-8 max-md:py-12">
      <Link
        href="/#work"
        className="flex flex-col gap-2 no-underline p-6 border-2 border-border transition-all duration-400 flex-1 max-w-[300px] items-start hover:border-accent hover:bg-bg max-md:max-w-full"
        style={{ transitionTimingFunction: "var(--ease-smooth)" }}
      >
        <span className="text-[0.75rem] text-secondary tracking-[1px] uppercase font-mono">
          Back to
        </span>
        <span className="font-body text-[1.1rem] font-bold text-text">
          All Projects
        </span>
      </Link>
      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="flex flex-col gap-2 no-underline p-6 border-2 border-border transition-all duration-400 flex-1 max-w-[300px] items-end ml-auto hover:border-accent hover:bg-bg max-md:max-w-full max-md:ml-0"
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        >
          <span className="text-[0.75rem] text-secondary tracking-[1px] uppercase font-mono">
            Next Project
          </span>
          <span className="font-body text-[1.1rem] font-bold text-text">
            {next.title} &rarr;
          </span>
        </Link>
      )}
    </nav>
  );
}
