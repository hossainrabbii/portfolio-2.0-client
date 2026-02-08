"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, FileText, FolderKanban, LayoutDashboard } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import BlogForm from "@/components/dashboard/BlogForm";
import ProjectForm from "@/components/dashboard/ProjectForm";
import BlogList from "@/components/dashboard/BlogList";
import ProjectList from "@/components/dashboard/ProjectList";
import Link from "next/link";
import { LogoutButton } from "@/components/Logout";

const Dashboard = () => {
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<string | null>(null);

  const handleCreateBlog = () => {
    setEditingBlog(null);
    setShowBlogForm(true);
  };

  const handleEditBlog = (slug: string) => {
    setEditingBlog(slug);
    setShowBlogForm(true);
  };

  const handleCreateProject = () => {
    setEditingProject(null);
    setShowProjectForm(true);
  };

  const handleEditProject = (slug: string) => {
    setEditingProject(slug);
    setShowProjectForm(true);
  };

  return (
    <div className="container mx-auto min-h-screen bg-background">
      {/* Header */}
      <LogoutButton />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="section-container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-[#E1B505]  flex items-center justify-center">
                  <LayoutDashboard className="h-4 w-4 text-[#E1B505] foreground" />
                </div>
                <span className="font-bold text-lg">Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm">
                <Link href="/">View Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="section-container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Content Management</h1>
            <p className="text-muted-foreground">
              Manage your blog posts and projects from one place
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#E1B505]" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Blog Posts</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FolderKanban className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-destructive text-xl">💬</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm text-muted-foreground">Comments</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="blogs" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <TabsList className="bg-secondary/50">
                <TabsTrigger value="blogs" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Blogs
                </TabsTrigger>
                <TabsTrigger value="projects" className="gap-2">
                  <FolderKanban className="h-4 w-4" />
                  Projects
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="blogs" className="space-y-4">
              {showBlogForm ? (
                <BlogForm
                  editSlug={editingBlog}
                  onClose={() => {
                    setShowBlogForm(false);
                    setEditingBlog(null);
                  }}
                />
              ) : (
                <>
                  <div className="flex justify-end">
                    <Button onClick={handleCreateBlog} className="gap-2">
                      <Plus className="h-4 w-4" />
                      New Blog Post
                    </Button>
                  </div>
                  <BlogList onEdit={handleEditBlog} />
                </>
              )}
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              {showProjectForm ? (
                <ProjectForm editSlug={editingProject} />
              ) : (
                <>
                  <Link href="dashboard/create-project">
                    <div className="flex justify-end">
                      <Button>
                        <Plus className="h-4 w-4" />
                        New Project
                      </Button>
                    </div>
                  </Link>
                </>
              )}
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
