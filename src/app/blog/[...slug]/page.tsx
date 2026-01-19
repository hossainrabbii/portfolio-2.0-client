
import BlogDetail from "@/components/BlogDetail";
import Blog from "@/pages/Blog";
import { getSingleBlog } from "@/services/Blog";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);
  console.log(blog.data);
  return (
    <>
      {" "}
      {slug}
      {/* <BlogDetail blogDetail={blog.data} slug={slug} /> */}
    </>
  );
}
