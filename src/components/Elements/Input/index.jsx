import { forwardRef } from "react";
import Label from "./Label";
import Input from "./input";

const FormInput = forwardRef((props, ref) => {
  const { name, type, placeholder, className } = props;
  return (
    <div className="mb-4">
      <Label name={name} />
      <Input
        type={type}
        name={name}
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
});

export default FormInput;
