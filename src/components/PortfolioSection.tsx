import { getAllProjects } from "@/services/Project";
import Portfolio from "./Portfolio";

const PortfolioSection = async () => {
  const allProjects = await getAllProjects();
  // console.log(allProjects);
  return (
    <>
      <Portfolio projects={allProjects.data} />
    </>
  );
};

export default PortfolioSection;
