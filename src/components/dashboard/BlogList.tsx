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
} from "lucide-react";
import { blogPosts } from "@/data/blogData";
import { Link } from "react-router-dom";
import Image from "next/image";
import { deleteBlog } from "@/services/Blog";
import { toast } from "sonner";

interface BlogListProps {
  onEdit: (slug: string) => void;
  blogs: any;
}

const BlogList = ({ onEdit, blogs }: BlogListProps) => {
  // const { toast } = useToast();
  // console.log(blogs);
  const handleDelete = async (id: string) => {
    const response = await deleteBlog(id);
    if (response.success) {
      toast.success(response?.message || "Blog Deleted Successfully.");
    }

    // toast({
    //   title: "Blog Deleted",
    //   description: `"${title}" has been deleted. Implement API call to persist.`,
    //   variant: "destructive",
    // });
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
                <TableHead className="w-[300px]">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-center">Stats</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((post: any, index: number) => (
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
                        src={post.coverImage}
                        alt={post.author.name}
                        width={500}
                        height={500}
                        className="h-7 w-10 rounded bg-muted"
                      />
                      <div>
                        <p className="font-medium line-clamp-1">{post.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.readTime}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image
                        src={post.coverImage}
                        alt={post.author.name}
                        width={500}
                        height={500}
                        className="h-6 w-6 rounded-full bg-muted"
                      />
                      <span className="text-sm">{post.author.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {post.publishedAt}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-3 w-3" />
                        {post.comments.length}
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
                      <DropdownMenuContent align="end" className="bg-popover">
                        <DropdownMenuItem asChild>
                          {/* <Link
                            to={`/blog/${post.slug}`}
                            className="flex items-center gap-2"
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Link> */}
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => onEdit(post.slug)}
                          className="flex items-center gap-2"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(post._id)}
                          className="flex items-center gap-2 text-destructive focus:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
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

export default BlogList;
