import Navbar from "../components/Navbar";
import { useState } from "react";
import Taskmodal from "../components/taskmodal";
import TaskCard from "../components/taskcard";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now() };
    setTasks((prev) => [...prev, taskWithId]);
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
                    <TaskCard key={t.id} task={t} />
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
                    <TaskCard key={t.id} task={t} />
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
                    <TaskCard key={t.id} task={t} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Taskmodal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
      />
    </div>
  );
};

export default Home;
