import ProjectDetail from "@/components/ProjectDetail";
import { getSingleProject } from "@/services/Project";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getSingleProject(slug);
  return {
    title: product.data.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectDetail = await getSingleProject(slug);

  return <ProjectDetail project={projectDetail?.data} slug={slug} />;
}
