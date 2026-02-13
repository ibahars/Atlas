import AppButton from "../components/UI/AppButton";

const Welcome = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-700 flex flex-col items-center justify-center text-white px-4">
      <div className="mb-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl">
        <span className="text-6xl">🚀</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center tracking-tight">
        Atlas Task Manager'a <br />{" "}
        <span className="text-blue-200">Hoş Geldiniz</span>
      </h1>
    
      <p className="text-lg md:text-xl text-blue-100 mb-10 text-center max-w-lg font-light leading-relaxed">
        İşlerinizi organize edin, verimliliğinizi artırın ve hedeflerinize daha
        hızlı ulaşın. Her şey tek bir board üzerinde.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <AppButton
          onClick={onStart}
          color="bg-white !text-indigo-600 hover:bg-indigo-500 px-10 py-4 text-lg font-bold shadow-xl"
          children={"Hemen Başla"}
        />
      </div>

      <div className="mt-16 text-blue-200/50 text-sm">
        © 2026 Atlas Productivity Tools
      </div>
    </div>
  );
};

export default Welcome;
