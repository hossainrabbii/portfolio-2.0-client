import BlogDetail from "@/components/BlogDetail";
import { getSingleBlog } from "@/services/Blog";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  return <BlogDetail blogDetail={blog.data} slug={slug} />;
}
