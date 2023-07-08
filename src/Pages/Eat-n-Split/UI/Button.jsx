function Button({ children, onButtonClick }) {
  return (
    <div
      className="bg-[#ffa94d] text-gray-900 font-bold py-2 px-4 rounded-lg "
      onClick={() => onClose(false)}
    >
      {children}
    </div>
  );
}

export default Button;
