"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import SocialShare from "@/components/SocialShare";
import CommentSection from "@/components/CommentSection";
import { useEffect } from "react";
import Image from "next/image";

type TBLogProps = {
  blogDetail: any;
  slug: string;
};

const BlogDetail = ({ blogDetail, slug }: TBLogProps) => {
  // const { slug } = useParams<{ slug: string }>();
  // const navigate = useNavigate();
  // const post = slug ? getBlogBySlug(slug) : undefined;
  // const relatedPosts = slug ? getRelatedPosts(slug) : [];
  // console.log(blogDetail.blogDetail);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blogDetail) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center container mx-auto px-4">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <Link to="/blog" className="text-[#E1B505] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  console.log(currentUrl);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="section-container max-w-4xl container mx-auto px-4">
          {/* Back Button */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => navigate("/blog")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </motion.div> */}

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-[#E1B505] text-black foreground text-sm font-medium px-4 py-1.5 rounded-full">
              {blogDetail.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8"
          >
            {blogDetail.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 mb-8"
          >
            {/* Author */}
            {/* <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#E1B505]/20 flex items-center justify-center">
                <span className="font-medium text-[#E1B505]">DM</span>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {blogDetail.author.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {blogDetail.author.role}
                </p>
              </div>
            </div> */}

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(blogDetail?.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    },
                  )}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{blogDetail.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-[15/9] rounded-2xl overflow-hidden bg-secondary mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E1B505]/30 via-[#E1B505]/10 to-accent/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[12rem] font-display font-bold text-[#E1B505]/10">
                <Image
                  src={blogDetail?.coverImage}
                  width={1200}
                  height={500}
                  alt={blogDetail?.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />

                {/* {blogDetail.title.charAt(0)} */}
              </span>
            </div>
          </motion.div>

          {/* Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-card rounded-2xl border border-border mb-12"
          >
            <LikeButton initialLikes={blogDetail.likes} size="lg" />
            <SocialShare
              url={currentUrl}
              title={blogDetail.title}
              description={blogDetail.excerpt}
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="section-container max-w-4xl container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div
              className="text-muted-foreground leading-relaxed space-y-6 
                [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4
                [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3
                [&>p]:text-base [&>p]:leading-relaxed
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2
              "
              dangerouslySetInnerHTML={{
                __html: blogDetail.content.replace(/\n/g, "<br />"),
              }}
            />
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-border"
          >
            <Tag className="w-4 h-4 text-muted-foreground" />
            {blogDetail.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comments */}
      <section className="py-16 bg-secondary/20">
        <div className="section-container max-w-4xl container mx-auto px-4">
          <CommentSection comments={blogDetail.comments} />
        </div>
      </section>

      {/* Related Posts */}
      {/* {relatedPosts.length > 0 && (
        <section className="py-24">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Related Articles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-[#E1B505]/50 transition-all"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E1B505]/20 to-accent/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-display font-bold text-[#E1B505]/20">
                            {relatedPost.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-xs text-[#E1B505] mb-2">
                          {relatedPost.category}
                        </p>
                        <h3 className="font-display font-semibold text-foreground group-hover:text-[#E1B505] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )} */}

      <Footer />
    </div>
  );
};

export default BlogDetail;
