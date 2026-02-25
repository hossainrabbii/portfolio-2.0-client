import { getAllProjects } from "@/services/Project";
import PortfolioCard from "./PortfolioCard";
import HomeSectionHeader from "./HomeSectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PortfolioSection = async () => {
  const allProjects = await getAllProjects();
  // console.log(allProjects);
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container container mx-auto px-4">
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
        <div className="block md:hidden mt-4 mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#E1B505] text-black foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
