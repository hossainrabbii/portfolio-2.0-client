import ProjectDetail from "@/components/ProjectDetail";
import { getSingleProject } from "@/services/Project";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectDetail = await getSingleProject(slug);
  return <ProjectDetail project={projectDetail?.data} slug={slug} />;
}
