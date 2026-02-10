import AllProjects from "@/components/AllProjects";
import ProjectList from "@/components/dashboard/ProjectList";
import { getAllProjects } from "@/services/Project";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hossain Rabbi - All Projects",
};
const ProjectPage = async () => {
  const allProjects = await getAllProjects();

  return (
    <div className="container mx-auto my-12">
      <AllProjects projects={allProjects.data} />
    </div>
  );
};

export default ProjectPage;
