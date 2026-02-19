import NewProjectForm from "@/components/dashboard/NewProjectForm";
import { getAllCategory } from "@/services/Category";

const CreateCategoryPage = async () => {
  const { data } = await getAllCategory();
  console.log("Categories:", data);
  return (
    <div className="container mx-auto my-12 px-4">
      <NewProjectForm editSlug="" categories={data} />
      {/* <ProjectForm editSlug="" categories={data} /> */}
    </div>
  );
};

export default CreateCategoryPage;
