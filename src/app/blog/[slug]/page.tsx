import BlogDetail from "@/components/BlogDetail";
import { getSingleBlog } from "@/services/Blog";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getSingleBlog(slug);
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
  const blog = await getSingleBlog(slug);
  return <BlogDetail blogDetail={blog.data} slug={slug} />;
}
