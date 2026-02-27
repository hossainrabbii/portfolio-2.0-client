import Dashboard from "@/components/dashboard/Dashboard";
import { getAllBlogs } from "@/services/Blog";

const DashboardPage = async () => {
  const blogPosts = await getAllBlogs();
  return (
    <>
      <Dashboard blog={blogPosts?.data} />
    </>
  );
};

export default DashboardPage;
