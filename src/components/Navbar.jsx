import AppButton from "./UI/AppButton";
const Navbar = ({ onAddClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">Atlas</h1>
      <AppButton
        onClick={onAddClick}
        color={"bg-indigo-600"}
        children={"+ Yeni Görev"}
      />
    </nav>
  );
};
export default Navbar;
