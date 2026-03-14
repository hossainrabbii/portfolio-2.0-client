import CreateTodoForm from "@/components/CreateTodoForm";
import TodoClient from "@/components/ToDoClient";
import { getTodo } from "@/services/ToDo";

const toDoPage = async () => {
  const todoData = await getTodo();
  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-center text-2xl font-bold">Get Things Done</h2>

      <h4 className="text-center text-lg font-semibold">
        Stay organized and focused. Complete your tasks on time
      </h4>
      <section className="w-full md:w-4/6 gap-6 w-full py-12 border shadow-lg rounded-lg mx-auto p-6 my-2">
        {/* todo form */}
        <CreateTodoForm />

        <div className="w-full mt-6">
          <TodoClient initialTodos={todoData?.data || []} />
        </div>
      </section>
    </div>
  );
};

export default toDoPage;
