import { getAllBlogs } from "@/services/Blog";
import BlogCard from "./BlogCard";
import HomeSectionHeader from "./HomeSectionHeader";

const BlogSection = async () => {
  const { data, error } = await getAllBlogs();

  if (error) {
    return (
      <section className="py-24">
        <p className="text-red-500 text-center">⚠️ {error}</p>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24">
      <div className="section-container container mx-auto px-4">
        <HomeSectionHeader
          latest="Latest Insights"
          boldFontTop="Thoughts, Ideas &"
          boldFontBottom="Design Stories"
          viewText="View All Articles"
          link="blog"
        />

        <BlogCard blog={data?.data} />
      </div>
    </section>
  );
};

export default BlogSection;
