import Blog from "@/components/Blog";
import { getAllBlogs } from "@/services/Blog";

const BlogPage = async () => {
  const { data: allBlogs } = await getAllBlogs();
  return <Blog allBlogs={allBlogs} />;
};

export default BlogPage;
