import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

// depois: adicionar um pop-up para confirmação da ação

export default function BotaoSair() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("user"); // Limpa também os dados do usuário
            navigate("/");
        }
    }

    return(
        <div onClick={handleLogout} className="flex gap-4 p-2 w-25 justify-center bg-sky-700/50 rounded-2xl hover:bg-sky-700/70 hover:cursor-pointer">
            <TbLogout2 className="text-amber-50 text-xl"/>
            <span className="text-amber-50">Sair</span>
        </div>
    )
}