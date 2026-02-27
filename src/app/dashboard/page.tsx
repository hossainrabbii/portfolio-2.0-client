import Dashboard from "@/components/dashboard/Dashboard";
import { getAllBlogs } from "@/services/Blog";

const DashboardPage = async () => {
  const blogPosts = await getAllBlogs();

  if (!blogPosts?.data) {
    return <div>No blog data available</div>;
  }

  return <Dashboard blog={blogPosts.data} />;
};

export default DashboardPage;
