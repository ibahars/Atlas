import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Taskmodal from "../components/taskmodal";
import TaskCard from "../components/taskcard";

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("atlas-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() };
    setTasks((prev) => [...prev, taskWithId]);
  };
  useEffect(() => {
    localStorage.setItem("atlas-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onAddClick={() => setIsModalOpen(true)}></Navbar>

      {/* Board  */}
      <main className="flex-1 p-6 overflow-x-auto">
        <div className="flex gap-6 h-full min-w-max md:min-w-full justify-between">
          {/* todos */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Yapılacaklar
            </h2>
            <div className="flex-1 space-y-4">
              <div className="space-y-3">
                {tasks
                  .filter((t) => t.status === "todo")
                  .map((t) => (
                    <TaskCard
                      key={t.id}
                      task={t}
                      onDelete={deleteTask}
                      onEdit={handleEditClick}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Devam Edenler
            </h2>
            <div className="flex-1 space-y-4">
              <div className="space-y-3">
                {tasks
                  .filter((t) => t.status === "progress")
                  .map((t) => (
                    <TaskCard
                      key={t.id}
                      task={t}
                      onDelete={deleteTask}
                      onEdit={handleEditClick}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Done */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Tamamlananlar
            </h2>
            <div className="flex-1 space-y-4">
              <div className="space-y-3">
                {tasks
                  .filter((t) => t.status === "done")
                  .map((t) => (
                    <TaskCard
                      key={t.id}
                      task={t}
                      onDelete={deleteTask}
                      onEdit={handleEditClick}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Taskmodal
        key={editingTask ? editingTask.id : "new"}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        editingTask={editingTask}
      />
    </div>
  );
};

export default Home;
