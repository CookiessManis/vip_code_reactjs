import { Link } from "react-router-dom";

export default function AuthLayouts(props) {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-200">{`${title}`}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't Have An Account? "
            : "Already Have An Account? "}

          {type === "login" && (
            <Link to="/Register" className="text-blue-500">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/Login" className="text-blue-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
