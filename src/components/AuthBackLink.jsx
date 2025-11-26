import { useNavigate } from "react-router-dom";

export default function AuthBackLink({ to = "/", label = "Voltar" }) {
  const navigate = useNavigate();

  return (
    <div
      className="mt-6 text-sm cursor-pointer text-[#3D70B4] hover:underline"
      onClick={() => navigate(to)}
    >
      {label}
    </div>
  );
}
