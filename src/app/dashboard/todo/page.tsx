import CreateTodoForm from "@/components/CreateTodoForm";
import TodoClient from "@/components/ToDoClient";
import { getTodo } from "@/services/ToDo";

const toDoPage = async () => {
  const todoData = await getTodo();
  console.log(todoData);
  return (
    <section className="container mx-auto flex gap-6 w-full py-12">
      <div className="w-1/2">
        <TodoClient initialTodos={todoData?.data || []} />
      </div>

      <div className="w-1/2">
        <CreateTodoForm />
      </div>
    </section>
  );
};

export default toDoPage;
