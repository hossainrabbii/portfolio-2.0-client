"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Edit,
  Trash2,
  MoreHorizontal,
  Eye,
  MessageSquare,
  Heart,
  Star,
} from "lucide-react";
// import { projects } from "@/data/projectData";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { getAllProjects } from "@/services/Project";
import Link from "next/link";

interface ProjectListProps {
  // onEdit: (slug: string) => void;
  projects?: any;
}

const ProjectList = ({ projects }: ProjectListProps) => {
  console.log(projects);
  const { toast } = useToast();
  const handleDelete = (slug: string, title: string) => {
    // console.log("Delete project API call:", slug);
    toast({
      title: "Project Deleted",
      description: `"${title}" has been deleted. Implement API call to persist.`,
      variant: "destructive",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="glass-card overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[300px]">Project</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Year</TableHead>
                <TableHead className="text-center">Stats</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project: any, index: number) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={project.gallery[0]}
                        width={50}
                        height={50}
                        alt={project.title}
                        className="h-10 w-14 object-cover rounded-md bg-muted"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium line-clamp-1">
                            <Link href={`/projects/${project.slug}`}>
                              {project.title}
                            </Link>
                          </p>
                          {project.featured && (
                            <Star className="h-3 w-3 fill-primary text-[#E1B505]" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {project.duration}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{project.category}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{project.client}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {project.year}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        {project.likes}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-3 w-3" />
                        {project.comments.length}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      {/* <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem asChild>
                          <Link
                            to={`/project/${project.slug}`}
                            className="flex items-center gap-2"
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onEdit(project.slug)}
                          className="flex items-center gap-2"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleDelete(project.slug, project.title)
                          }
                          className="flex items-center gap-2 text-destructive focus:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent> */}
                    </DropdownMenu>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectList;
