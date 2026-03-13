import Dashboard from "@/components/dashboard/Dashboard";
import { getAllBlogs } from "@/services/Blog";

// Dynamic page
export const dynamic = "force-dynamic";

const DashboardPage = async () => {
  let blogPosts: any[] = [];

  try {
    const res = await getAllBlogs();
    if (Array.isArray(res?.data)) {
      blogPosts = res.data;
    }
    console.log(blogPosts);
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  return <Dashboard blog={blogPosts} />;
};

export default DashboardPage;
