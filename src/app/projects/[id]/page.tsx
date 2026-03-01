import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import siteData from '@/data/site.json';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return siteData.projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = siteData.projects.find((p) => p.id === Number(id));
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} // Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = siteData.projects.find((p) => p.id === Number(id));

  if (!project) notFound();

  const projectIndex = siteData.projects.findIndex((p) => p.id === Number(id));

  return <ProjectDetailClient project={project} index={projectIndex} />;
}
