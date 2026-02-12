import { Hero } from "@/components/home/Hero";
import { ProjectCard } from "@/components/home/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <Hero />
      <section id="work" className="py-16 px-12 max-w-[1400px] mx-auto max-md:px-8">
        <div className="flex flex-col gap-8 max-w-[900px] mx-auto">
          {projects.map((project) => (
            <FadeIn key={project.slug}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
