import { useLogin } from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>{username}</p>
    </div>
  );
}
