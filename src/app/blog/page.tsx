import Blog from "@/components/Blog";
import { getAllBlogs } from "@/services/Blog";

const BlogPage = async () => {
  const result = await getAllBlogs();
  console.log(result)
  // return <Blog allBlogs={allBlogs} />;
};

export default BlogPage;
