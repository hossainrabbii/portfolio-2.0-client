"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { getBlogBySlug } from "@/data/blogData";
import { useToast } from "@/hooks/use-toast";
import { createBlog } from "@/services/Blog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
interface BlogFormProps {
  editSlug: string | null;
  onClose: () => void;
}

const BlogForm = ({ editSlug, onClose }: BlogFormProps) => {
  const { toast } = useToast();
  const [fData, setFData] = useState({
    slug: "",

    coverImage: "",

    tags: [] as string[],
  });
  const [newTag, setNewTag] = useState("");
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  // // form

  useEffect(() => {
    if (editSlug) {
      const blog = getBlogBySlug(editSlug);
      if (blog) {
        setFData({
          slug: blog.slug,
          coverImage: blog.coverImage,
          tags: blog.tags,
        });
        setCoverPreview(blog.coverImage);
      }
    }
  }, [editSlug]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFData((prev) => ({ ...prev, slug }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
        setFData((prev) => ({
          ...prev,
          coverImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !fData.tags.includes(newTag.trim())) {
      setFData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // e.preventDefault();

    // // Create blog data object ready for API
    // const blogData = {
    //   // id: editSlug ? undefined : Date.now().toString(),
    //   slug: formData.slug,
    //   title: formData.title,
    //   excerpt: formData.excerpt,
    //   content: formData.content,
    //   category: formData.category,
    //   author: {
    //     name: formData.authorName,
    //     avatar: formData.authorAvatar,
    //     role: formData.authorRole,
    //   },
    //   coverImage: formData.coverImage,
    //   publishedAt: new Date().toISOString().split("T")[0],
    //   readTime: formData.readTime,
    //   likes: 0,
    //   comments: [],
    //   tags: formData.tags,
    // };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    // finalFormData.append("icon", formData.coverImage);

    const response = await createBlog(formData);
    console.log("Blog data to send to API:", formData);
    console.log("Blog data to send to API:", data);

    // toast({
    //   title: editSlug ? "Blog Updated" : "Blog Created",
    //   description: `"${fData.title}" has been ${
    //     editSlug ? "updated" : "created"
    //   } successfully. Check console for API payload.`,
    // });

    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className="glass-card">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle>
              {editSlug ? "Edit Blog Post" : "Create New Blog Post"}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Cover Image */}
            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                {coverPreview ? (
                  <div className="relative">
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setCoverPreview(null);
                        setFData((prev) => ({ ...prev, coverImage: "" }));
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="cursor-pointer block">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Click to upload cover image
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Title & Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                {/* <div contro={form.control}></div> */}
                {/* <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  required
                /> */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Title *</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={field.value || ""}
                          required
                          placeholder="Enter blog title"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                {/* <Label htmlFor="slug">Slug *</Label> */}
                {/* <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="blog-url-slug"
                  required
                /> */}

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Slug *</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          value={fData.slug}
                          onChange={handleInputChange}
                          required
                          placeholder="blog-url-slug"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Category & Read Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                {/* <Label htmlFor="category">Category *</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., Design Trends"
                  required
                /> */}

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Category *</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={field.value || ""}
                          required
                          placeholder="e.g., Design Trends"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                {/* <Label htmlFor="readTime">Read Time *</Label>
                <Input
                  id="readTime"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 8 min read"
                  required
                />
                 */}
                <FormField
                  control={form.control}
                  name="readTime"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Read Time *</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          value={field.value || ""}
                          required
                          placeholder="e.g., 8 min read"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              {/* <Label htmlFor="excerpt">Excerpt *</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="Brief description of the blog post"
                rows={2}
                required
              /> */}

              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Excerpt *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        value={field.value || ""}
                        required
                        placeholder="Brief description of the blog post"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              {/* <Label htmlFor="content">Content (Markdown supported) *</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Write your blog content here... Markdown is supported."
                rows={12}
                className="font-mono text-sm"
                required
              /> */}

              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Content (Markdown supported) *</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value || ""}
                        required
                        placeholder="Write your blog content here... Markdown is supported."
                        rows={12}
                        className="font-mono text-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Author Section */}
            <div className="space-y-4">
              <h3 className="font-semibold">Author Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  {/* <Label htmlFor="authorName">Author Name *</Label>
                  <Input
                    id="authorName"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  /> */}

                  <FormField
                    control={form.control}
                    name="authorName"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Author Name *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            value={field.value || ""}
                            required
                            placeholder="John Doe"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="authorRole">Author Role *</Label>
                  <Input
                    id="authorRole"
                    name="authorRole"
                    value={formData.authorRole}
                    onChange={handleInputChange}
                    placeholder="Product Designer"
                    required
                  /> */}

                  <FormField
                    control={form.control}
                    name="authorRole"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>Author Role *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            value={field.value || ""}
                            required
                            placeholder="Product Designer"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <div className="space-y-2">
                  <Label htmlFor="authorAvatar">Author Avatar URL</Label>
                  <Input
                    id="authorAvatar"
                    name="authorAvatar"
                    value={formData.authorAvatar}
                    onChange={handleInputChange}
                    placeholder="/placeholder.svg"
                  />
                </div> */}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {fData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                />
                <Button type="button" variant="outline" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 justify-end pt-4 border-t border-border">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {editSlug ? "Update Blog Post" : "Create Blog Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogForm;
