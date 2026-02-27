// import Dashboard from "@/components/dashboard/Dashboard";
// import { getAllBlogs } from "@/services/Blog";

// const DashboardPage = async () => {
//   const blogPosts = await getAllBlogs();

//   if (!blogPosts?.data) {
//     return <div>No blog data available</div>;
//   }

//   return <Dashboard blog={blogPosts.data} />;
// };

// export default DashboardPage;

// /dashboard/page.tsx
import Dashboard from "@/components/dashboard/Dashboard";
import { getAllBlogs } from "@/services/Blog";

const DashboardPage = async () => {
  let blogPosts: any[] = [];

  try {
    const res = await getAllBlogs();
    if (Array.isArray(res?.data)) {
      blogPosts = res.data;
    }
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
  }

  // Pass blogPosts safely to client component
  return <Dashboard blog={blogPosts} />;
};

export default DashboardPage;
