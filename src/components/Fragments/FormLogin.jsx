import FormInput from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        title="Username"
        name="username"
        type="text"
        placeholder="Mika"
        ref={usernameRef}
      />
      <FormInput
        title="Password"
        name="password"
        type="password"
        placeholder="*****"
      />
      {loginFailed && (
        <p className="text-red-600 mt-5 text-center">{loginFailed}</p>
      )}
      <Button classname="bg-blue-700 w-full " type="submit">
        Login
      </Button>
    </form>
  );
}
