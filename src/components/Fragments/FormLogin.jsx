import FormInput from "../Elements/Input";
import Button from "../Elements/Button";
export default function FormLogin() {
  return (
    <form action="">
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
      <Button classname="bg-blue-700 w-full">Login</Button>
    </form>
  );
}
