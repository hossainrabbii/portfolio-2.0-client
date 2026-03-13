// "use client"
import NewProjectForm from "@/components/dashboard/NewProjectForm";
import { getAllCategory } from "@/services/Category";

const projectPage = async () => {
  const categories = await getAllCategory();
  return (
    <div className="container mx-auto px-4">
      Project
      <NewProjectForm categories={categories?.data} />
    </div>
  );
};

export default projectPage;
