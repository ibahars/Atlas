import Navbar from "../components/Navbar";
import { useState } from "react";
import Taskmodal from "../components/taskmodal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Üst Kısım */}
      <Navbar onAddClick={() => setIsModalOpen(true)}></Navbar>

      {/* Board Alanı */}
      <main className="flex-1 p-6 overflow-x-auto">
        <div className="flex gap-6 h-full min-w-max md:min-w-full justify-between">
          {/* Kolon: Yapılacaklar */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
              Yapılacaklar
            </h2>
            <div className="flex-1 space-y-4">
              {/* Task kartları buraya gelecek */}
            </div>
          </div>

          {/* Kolon: Devam Edenler */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Devam Edenler
            </h2>
            <div className="flex-1 space-y-4">
              {/* Task kartları buraya gelecek */}
            </div>
          </div>

          {/* Kolon: Tamamlananlar */}
          <div className="w-80 md:flex-1 bg-gray-100 rounded-xl p-4 flex flex-col border border-gray-200">
            <h2 className="font-semibold text-gray-700 mb-4 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Tamamlananlar
            </h2>
            <div className="flex-1 space-y-4">
              {/* Task kartları buraya gelecek */}
            </div>
          </div>
        </div>
      </main>

      <Taskmodal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
