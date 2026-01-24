import { getAllBlogs } from "@/services/Blog";
import BlogCard from "./BlogCard";
import HomeSectionHeader from "./HomeSectionHeader";

const BlogSection = async () => {
  const blogPosts = await getAllBlogs();
  return (
    <section id="blog" className="py-24">
      <div className="section-container container mx-auto">
        {/* Section Header */}

        <HomeSectionHeader
          latest="Latest Insights"
          boldFontTop="Thoughts, Ideas &"
          boldFontBottom="Design Stories"
          viewText="View All Articles"
          link="blog"
        />

        {/* Section Card */}
        <BlogCard blog={blogPosts?.data} />
      </div>
    </section>
  );
};

export default BlogSection;
