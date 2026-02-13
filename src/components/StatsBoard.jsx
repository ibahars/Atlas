const StatsBoard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const todoTasks = tasks.filter((t) => t.status === "todo").length;
  const progressTasks = tasks.filter((t) => t.status === "progress").length;
  const doneTasks = tasks.filter((t) => t.status === "done").length;
  return (
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
  );
};
export default StatsBoard;
