const Button = ({ variant = 'primary', children, ...props }) => {
  const base = "px-4 py-2 rounded font-semibold ";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
