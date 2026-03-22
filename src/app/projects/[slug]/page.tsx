import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/content";
import ProjectDetail from "./ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // This is handled at render time
  return {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors mb-12"
        >
          <span>&#8592;</span>
          <span>$ cd ..</span>
        </Link>

        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
