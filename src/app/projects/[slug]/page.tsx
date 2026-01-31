import ProjectDetail from "@/components/ProjectDetail";
import { getSingleProject } from "@/services/Project";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectDetail = await getSingleProject(slug);

  console.log(projectDetail?.data);
  return <ProjectDetail project={projectDetail?.data} slug={slug} />;
}
