import { getAllBlogs } from "@/services/Blog";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BlogSection = async () => {
  const blogPosts = await getAllBlogs();
  console.log(blogPosts.data);
  // const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        {/* Section Header */}
        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Latest Insights
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Thoughts, Ideas &
              <br />
              <span className="text-primary">Design Stories</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              View All Articles
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div> */}

        <BlogCard blog={blogPosts.data} />
      </div>
    </section>
  );
};

export default BlogSection;
