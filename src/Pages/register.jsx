import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

export default function RegisterPage(props) {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        have an account?{" "}
        <Link to="/Login" className="text-blue-500">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
}
