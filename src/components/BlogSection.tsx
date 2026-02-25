import { getAllBlogs } from "@/services/Blog";
import BlogCard from "./BlogCard";
import HomeSectionHeader from "./HomeSectionHeader";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BlogSection = async () => {
  const blogPosts = await getAllBlogs();
  let content;
  if (blogPosts?.data.length == 0) {
    content = (
      <section id="blog" className="py-24">
        <div className="section-container container mx-auto px-4 text-center">
          Exiting blogs will be posted soon.
        </div>
      </section>
    );
  }
  if (blogPosts?.data.length > 0) {
    content = (
      <section id="blog" className="py-24">
        <div className="section-container container mx-auto px-4">
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
          <div className="block md:hidden mt-4 mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#E1B505] text-black foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View All Blogs
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return <>{content}</>;
};

export default BlogSection;
