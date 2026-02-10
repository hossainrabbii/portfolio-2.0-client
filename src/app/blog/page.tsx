import Blog from "@/components/Blog";
import { getAllBlogs } from "@/services/Blog";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hossain Rabbi - All Blogs",
};
const BlogPage = async () => {
  const { data: allBlogs } = await getAllBlogs();
  return <Blog allBlogs={allBlogs} />;
};

export default BlogPage;
