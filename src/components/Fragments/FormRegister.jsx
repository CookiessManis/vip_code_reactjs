import FormInput from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormRegister() {
  return (
    <form action="">
      <FormInput
        title="FullName"
        name="FullName"
        type="text"
        placeholder="john doe"
      />
      <FormInput
        title="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
      />
      <FormInput
        title="Password"
        name="password"
        type="password"
        placeholder="*****"
      />
      <FormInput
        title="ConfirmPassword"
        name="Confirmpassword"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-700 w-full">Register</Button>
    </form>
  );
}
