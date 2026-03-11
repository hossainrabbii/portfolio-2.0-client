// src/app/project/page.tsx
import AllProjects from "@/components/AllProjects";
import { getAllProjects } from "@/services/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hossain Rabbi - All Projects",
};

// Important: tell Next.js this page is dynamic
export const dynamic = "force-dynamic";

const ProjectPage = async () => {
  let allProjects: any[] = [];

  try {
    const res = await getAllProjects();
    if (Array.isArray(res?.data)) {
      allProjects = res.data;
    }
  } catch (err) {
    console.error("Failed to fetch projects:", err);
  }

  return (
    <div className="container mx-auto my-12 px-4">
      <AllProjects projects={allProjects} />
    </div>
  );
};

export default ProjectPage;