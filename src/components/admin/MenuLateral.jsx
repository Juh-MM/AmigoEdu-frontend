import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends, FaRegCheckSquare, FaSignOutAlt } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import Logo from '../../assets/Logo.png';

import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

export default function MenuLateral() {
  const { pathname } = useLocation();

  const getLinkClassDesktop = (path) => {
    const baseClasses = "flex gap-4 p-2 align-middle font-semibold rounded-2xl px-4 hover:cursor-pointer";
    const activeClasses = "bg-sky-700/50";
    const inactiveClasses = "hover:bg-sky-700/70";
    return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
  };

  const getLinkClassMobile = (path) => {
    const base = "flex flex-col items-center justify-center gap-1 p-2 rounded-lg min-w-[56px] min-h-[56px] text-amber-50 hover:cursor-pointer";
    const active = "bg-sky-700/50";
    const inactive = "hover:bg-sky-700/70";
    return `${base} ${pathname === path ? active : inactive}`;
  };

  const links = [
    { to: "/admin/visao-geral", icon: <AiOutlineHome className="text-amber-50 text-xl" />, label: "Visão Geral" },
    { to: "/admin/usuarios", icon: <FaUserFriends className="text-amber-50 text-lg" />, label: "Usuários" },
    { to: "/admin/metas", icon: <FaRegCheckSquare className="text-amber-50 text-lg" />, label: "Metas" },
    { to: "/admin/ranking", icon: <LuCrown className="text-amber-50 text-lg" />, label: "Ranking" },
    { to: "/admin/configuracoes", icon: <IoSettingsOutline className="text-amber-50 text-lg" />, label: "Configurações" },
  ];

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

  return (
    <>
      <aside className="hidden md:flex flex-col w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm h-[calc(100vh-2.5rem)] m-5">
        <div className="flex flex-col w-full gap-10 items-center">
          <img src={Logo} className="w-36 object-contain" alt="Logo do Admin" />
          <div className="flex flex-col gap-5 w-full">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={getLinkClassDesktop(link.to)}
                aria-current={pathname === link.to ? "page" : undefined}
              >
                {link.icon}
                <h1 className="text-amber-50">{link.label}</h1>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full">
          <button className="flex gap-4 p-2 w-25 justify-center bg-sky-700/50 rounded-2xl hover:bg-sky-700/70 hover:cursor-pointer"
          onClick={handleLogout}>
            <TbLogout2 className="text-amber-50 text-xl"/>
            <span className="text-amber-50">Sair</span>
          </button>
        </div>
      </aside>

      <nav className="md:hidden fixed bottom-4 inset-x-2 max-w-full bg-sky-600/95 backdrop-blur-sm rounded-2xl px-2 py-2 flex justify-between items-center z-50 shadow-lg">
        <div
          className="
            flex justify-between gap-1 items-center w-full
            overflow-x-auto no-scrollbar
            px-1
          "
        >
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={getLinkClassMobile(link.to)}
              aria-current={pathname === link.to ? "page" : undefined}
              title={link.label}
            >
              {link.icon}
              {/* label aparece só em telas >= sm */}
              <span className="text-[10px] leading-none hidden sm:block">{link.label}</span>
            </Link>
          ))}

          <div className="flex-shrink-0 pl-1">
            <button
              onClick={handleLogout}
              aria-label="Sair"
              title="Sair"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-amber-50/30 text-white hover:opacity-95 px-2 py-2"
            ><FaSignOutAlt className="text-lg" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
