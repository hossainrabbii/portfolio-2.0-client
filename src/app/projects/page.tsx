import ProjectList from "@/components/dashboard/ProjectList";
import { getAllProjects } from "@/services/Project";

const ProjectPage = async () => {
  const allProjects = await getAllProjects();

  return (
    <div className="container mx-auto my-12">
      <ProjectList projects={allProjects.data} />
    </div>
  );
};

export default ProjectPage;
