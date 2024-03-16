import Label from "./Label";
import Input from "./input";

export default function FormInput(props) {
  const { title, name, type, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
