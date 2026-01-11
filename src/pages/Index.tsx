import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackedProjects from "@/components/StackedProjects";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BlogSection from "@/components/BlogSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StackedProjects />
      <FeaturedProjects />
      <About />
      <Experience />
      <Clients />
      <Services />
      <Portfolio />
      <BlogSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
