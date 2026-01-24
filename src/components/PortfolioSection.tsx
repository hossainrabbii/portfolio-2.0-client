import { getAllProjects } from "@/services/Project";
import PortfolioCard from "./PortfolioCard";
import HomeSectionHeader from "./HomeSectionHeader";

const PortfolioSection = async () => {
  const allProjects = await getAllProjects();
  // console.log(allProjects);
  return (
    <section id="blog" className="py-24">
      <div className="section-container container mx-auto">
        {/* Section header */}
        <HomeSectionHeader
          latest="Selected Works"
          boldFontTop="Showcasing My Work for"
          boldFontBottom="Your Inspiration"
          viewText="View All Projects"
          link="projects"
        />
        {/* Section project */}
        <PortfolioCard projects={allProjects.data} />
      </div>
    </section>
  );
};

export default PortfolioSection;
