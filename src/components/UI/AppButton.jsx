const AppButton = ({ onClick, children, color }) => {
  return (
    <button
      className={`${color} hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default AppButton;
