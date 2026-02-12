const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
