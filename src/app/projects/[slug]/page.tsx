import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ContentSection } from "@/components/project/ContentSection";
import { ImageGallery } from "@/components/project/ImageGallery";
import { TakeawaysList } from "@/components/project/TakeawaysList";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Lamees`,
    description: project.excerpt,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { next } = getAdjacentProjects(slug);

  return (
    <article className="pt-20">
      <ProjectHero project={project} />

      <div className="max-w-[1200px] mx-auto px-12 pb-24 pt-16 max-md:px-8">
        {project.sections.map((section, i) => {
          switch (section.type) {
            case "overview":
              return (
                <FadeIn key={i}>
                  <ContentSection section={section} />
                </FadeIn>
              );
            case "gallery":
              return (
                <FadeIn key={i}>
                  <ImageGallery images={section.images || []} />
                </FadeIn>
              );
            case "reflection":
              return (
                <FadeIn key={i}>
                  <section className="bg-white border-2 border-border p-8 grid grid-cols-1 gap-8 mb-16 max-sm:px-6">
                    <div className="font-mono text-[0.75rem] font-bold tracking-[2px] uppercase text-accent">
                      {section.label}
                    </div>
                    <blockquote className="border-l-4 border-accent pl-8 m-0 max-sm:pl-4">
                      <p className="text-[1.1rem] leading-[1.7] text-text font-normal font-body">
                        {section.quote}
                      </p>
                    </blockquote>
                  </section>
                </FadeIn>
              );
            case "takeaways":
              return (
                <FadeIn key={i}>
                  <TakeawaysList section={section} />
                </FadeIn>
              );
            default:
              return null;
          }
        })}
      </div>

      <ProjectNavigation next={next} />
    </article>
  );
}
