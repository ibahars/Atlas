import Button from "./UI/button";
const Navbar = ({ onAddClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">Atlas Task</h1>
      <Button onClick={onAddClick}>+ Yeni Görev</Button>
    </nav>
  );
};
export default Navbar;
