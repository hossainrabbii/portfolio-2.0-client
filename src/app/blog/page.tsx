import Blog from "@/components/Blog";
import { getAllBlogs } from "@/services/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hossain Rabbi - All Blogs",
};

// Add this
export const dynamic = "force-dynamic";
export const revalidate = 60;
const BlogPage = async () => {
  const { data: allBlogs } = await getAllBlogs();
  return <Blog allBlogs={allBlogs} />;
};

export default BlogPage;
