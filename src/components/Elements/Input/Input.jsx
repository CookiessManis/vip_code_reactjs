import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, type, placeholder, className } = props;
  return (
    <input
      type={type}
      name={name}
      className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
