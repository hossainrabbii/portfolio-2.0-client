import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";
import { getProjectBySlug } from "@/data/projectData";
import { useToast } from "@/hooks/use-toast";
import { createProject } from "@/services/Project";

interface ProjectFormProps {
  editSlug: string | null;
  onClose: () => void;
}

const ProjectForm = ({ editSlug, onClose }: ProjectFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    description: "",
    fullDescription: "",
    image: "",
    gallery: [] as string[],
    client: "",
    duration: "",
    year: "",
    role: "",
    tools: [] as string[],
    challenges: [] as string[],
    solutions: [] as string[],
    results: [] as string[],
    testimonialQuote: "",
    testimonialAuthor: "",
    testimonialRole: "",
    liveUrl: "",
    featured: false,
  });

  const [newTool, setNewTool] = useState("");
  const [newChallenge, setNewChallenge] = useState("");
  const [newSolution, setNewSolution] = useState("");
  const [newResult, setNewResult] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  useEffect(() => {
    if (editSlug) {
      const project = getProjectBySlug(editSlug);
      if (project) {
        setFormData({
          title: project.title,
          slug: project.slug,
          category: project.category,
          description: project.description,
          fullDescription: project.fullDescription,
          image:
            typeof project.image === "string"
              ? project.image
              : project.image.src,
          gallery: project.gallery.map((img) =>
            typeof img === "string" ? img : img.src
          ),
          client: project.client,
          duration: project.duration,
          year: project.year,
          role: project.role,
          tools: project.tools,
          challenges: project.challenges,
          solutions: project.solutions,
          results: project.results,
          testimonialQuote: project.testimonial?.quote || "",
          testimonialAuthor: project.testimonial?.author || "",
          testimonialRole: project.testimonial?.role || "",
          liveUrl: project.liveUrl || "",
          featured: project.featured,
        });

        setImagePreview(
          typeof project.image === "string" ? project.image : project.image.src
        );

        setGalleryPreviews(
          project.gallery.map((img) =>
            typeof img === "string" ? img : img.src
          )
        );
      }
    }
  }, [editSlug]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files);

    // ✅ store FILES (for backend)
    setGalleryImages((prev) => [...prev, ...selectedFiles]);

    // ✅ store PREVIEWS (for UI)
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index: number) => {
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addToList = (
    list: "tools" | "challenges" | "solutions" | "results",
    value: string,
    setValue: (val: string) => void
  ) => {
    if (value.trim() && !formData[list].includes(value.trim())) {
      setFormData((prev) => ({
        ...prev,
        [list]: [...prev[list], value.trim()],
      }));
      setValue("");
    }
  };

  const removeFromList = (
    list: "tools" | "challenges" | "solutions" | "results",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [list]: prev[list].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      // id: editSlug ? undefined : Date.now().toString(),
      slug: formData.slug,
      title: formData.title,
      category: formData.category,
      description: formData.description,
      fullDescription: formData.fullDescription,
      // image: formData.image,
      // gallery: formData.gallery,
      client: formData.client,
      duration: formData.duration,
      year: formData.year,
      role: formData.role,
      tools: formData.tools,
      challenges: formData.challenges,
      solutions: formData.solutions,
      results: formData.results,
      testimonial: formData.testimonialQuote
        ? {
            quote: formData.testimonialQuote,
            author: formData.testimonialAuthor,
            role: formData.testimonialRole,
          }
        : undefined,
      likes: 0,
      comments: [],
      liveUrl: formData.liveUrl || undefined,
      featured: formData.featured,
    };

    console.log("Project data to send to API:", projectData);

    const finalFormData = new FormData();

    finalFormData.append("data", JSON.stringify(projectData));

    galleryImages.forEach((file) => {
      finalFormData.append("gallery", file);
    });
    const response = await createProject(finalFormData);
    if (response.success) {
      // console.log(response);
      toast({
        title: editSlug ? "Project Updated" : "Project Created",
        description: `"${formData.title}" has been ${
          editSlug ? "updated" : "created"
        } successfully. Check console for API payload.`,
      });
      onClose();
    } else {
      toast({ title: "Something went wrong" });
    }
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
              {editSlug ? "Edit Project" : "Create New Project"}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Image */}
            {/* <div className="space-y-2">
              <Label>Project Image</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Project preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setImagePreview(null);
                        setFormData((prev) => ({ ...prev, image: "" }));
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
                        Click to upload project image
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
            </div> */}

            {/* Gallery Images */}
            <div className="space-y-2">
              <Label>Gallery Images</Label>
              <p className="text-xs text-muted-foreground mb-2">
                Upload additional project images (screenshots, process, details)
              </p>

              {galleryPreviews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  {galleryPreviews.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeGalleryImage(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors">
                <label className="cursor-pointer block">
                  <div className="flex flex-col items-center gap-2">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Click to add gallery images
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleGalleryUpload}
                  />
                </label>
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Project title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="project-url-slug"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="e.g., UI Design"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client">Client *</Label>
                <Input
                  id="client"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  placeholder="Client name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration *</Label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder="e.g., 3 months"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="2024"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Your Role *</Label>
                <Input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="e.g., Lead Designer"
                  required
                />
              </div>
            </div>

            {/* Descriptions */}
            <div className="space-y-2">
              <Label htmlFor="description">Short Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief project description"
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullDescription">Full Description *</Label>
              <Textarea
                id="fullDescription"
                name="fullDescription"
                value={formData.fullDescription}
                onChange={handleInputChange}
                placeholder="Detailed project description..."
                rows={6}
                required
              />
            </div>

            {/* Tools */}
            <div className="space-y-2">
              <Label>Tools Used</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tool}
                    <button
                      type="button"
                      onClick={() => removeFromList("tools", tool)}
                      className="hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newTool}
                  onChange={(e) => setNewTool(e.target.value)}
                  placeholder="Add a tool"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(),
                    addToList("tools", newTool, setNewTool))
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addToList("tools", newTool, setNewTool)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-2">
              <Label>Challenges</Label>
              <div className="space-y-2 mb-2">
                {formData.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg"
                  >
                    <span className="flex-1 text-sm">{challenge}</span>
                    <button
                      type="button"
                      onClick={() => removeFromList("challenges", challenge)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newChallenge}
                  onChange={(e) => setNewChallenge(e.target.value)}
                  placeholder="Add a challenge"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(),
                    addToList("challenges", newChallenge, setNewChallenge))
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    addToList("challenges", newChallenge, setNewChallenge)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-2">
              <Label>Solutions</Label>
              <div className="space-y-2 mb-2">
                {formData.solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg"
                  >
                    <span className="flex-1 text-sm">{solution}</span>
                    <button
                      type="button"
                      onClick={() => removeFromList("solutions", solution)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newSolution}
                  onChange={(e) => setNewSolution(e.target.value)}
                  placeholder="Add a solution"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(),
                    addToList("solutions", newSolution, setNewSolution))
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    addToList("solutions", newSolution, setNewSolution)
                  }
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-2">
              <Label>Results</Label>
              <div className="space-y-2 mb-2">
                {formData.results.map((result, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg"
                  >
                    <span className="flex-1 text-sm">{result}</span>
                    <button
                      type="button"
                      onClick={() => removeFromList("results", result)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={newResult}
                  onChange={(e) => setNewResult(e.target.value)}
                  placeholder="Add a result"
                  onKeyPress={(e) =>
                    e.key === "Enter" &&
                    (e.preventDefault(),
                    addToList("results", newResult, setNewResult))
                  }
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => addToList("results", newResult, setNewResult)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-4 p-4 bg-secondary/20 rounded-xl">
              <h3 className="font-semibold">Client Testimonial (Optional)</h3>
              <div className="space-y-2">
                <Label htmlFor="testimonialQuote">Quote</Label>
                <Textarea
                  id="testimonialQuote"
                  name="testimonialQuote"
                  value={formData.testimonialQuote}
                  onChange={handleInputChange}
                  placeholder="Client testimonial quote"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="testimonialAuthor">Author Name</Label>
                  <Input
                    id="testimonialAuthor"
                    name="testimonialAuthor"
                    value={formData.testimonialAuthor}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="testimonialRole">Author Role</Label>
                  <Input
                    id="testimonialRole"
                    name="testimonialRole"
                    value={formData.testimonialRole}
                    onChange={handleInputChange}
                    placeholder="CEO at Company"
                  />
                </div>
              </div>
            </div>

            {/* Live URL & Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liveUrl">Live URL (Optional)</Label>
                <Input
                  id="liveUrl"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex items-center gap-3 pt-6">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, featured: checked }))
                  }
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 justify-end pt-4 border-t border-border">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {editSlug ? "Update Project" : "Create Project"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectForm;
