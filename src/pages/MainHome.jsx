import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Taskmodal from "../components/Taskmodal";
import TaskCard from "../components/TaskCard";

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

  // stat records
  const totalTasks = tasks.length;
  const todoTasks = tasks.filter((t) => t.status === "todo").length;
  const progressTasks = tasks.filter((t) => t.status === "progress").length;
  const doneTasks = tasks.filter((t) => t.status === "done").length;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onAddClick={() => setIsModalOpen(true)}></Navbar>
      {/**Stats Board */}
      <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-indigo-600">{totalTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Toplam Görev</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-blue-500">{todoTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Yapılacak</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-yellow-500">
            {progressTasks}
          </div>
          <div className="text-sm text-gray-500 font-medium">Devam Eden</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-2xl font-bold text-green-500">{doneTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Tamamlanan</div>
        </div>
      </div>
      {/*Main Board  */}
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
      tests
    </div>
  );
};

export default Home;
