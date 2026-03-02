import { notFound } from "next/navigation";
import { getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { PacManProjectPage } from "@/components/project/PacManProjectPage";

export const metadata = {
  title: "Project 03 — Lamees",
  description: "Level Up: Embedded Arcade Project — where circuits meet gameplay.",
};

export default function Project3Page() {
  const project = getProjectBySlug("project-3");
  if (!project) notFound();

  const { next } = getAdjacentProjects("project-3");

  return <PacManProjectPage project={project} nextProject={next} />;
}
