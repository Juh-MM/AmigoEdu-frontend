import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends, FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, Outlet, useLocation } from "react-router-dom";
import BotaoSair from "../../components/BotaoSair";
import Logo from '../../assets/Logo.png';

export default function AdminLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const getLinkClass = (path) => {
    const baseClasses = "flex gap-4 p-2 align-middle font-semibold rounded-2xl px-4 hover:cursor-pointer";
    const activeClasses = "bg-sky-700/50"; 
    const inactiveClasses = "hover:bg-sky-700/70";
    return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-fit p-5 box-border">
        <div className="flex flex-col h-full w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm">
          <div className="flex flex-col w-full gap-10 items-center">
            <img src={Logo} className="w-25" alt="Logo do Admin"/>
            <div className="flex flex-col gap-5 w-full">
              <Link to="/admin/visao-geral" className={getLinkClass("/admin/visao-geral")}>
                <AiOutlineHome className="text-amber-50 text-xl"/>
                <h1 className="text-amber-50">Visão Geral</h1>
              </Link>
              <Link to="/admin/usuarios" className={getLinkClass("/admin/usuarios")}>
                <FaUserFriends className="text-amber-50 text-lg"/>
                <h1 className="text-amber-50">Usuários</h1>
              </Link>
              <Link to="/admin/metas" className={getLinkClass("/admin/metas")}>
                <FaRegCheckSquare className="text-amber-50 text-lg"/>
                <h1 className="text-amber-50">Metas</h1>
              </Link>
              <Link to="/admin/ranking" className={getLinkClass("/admin/ranking")}>
                <LuCrown className="text-amber-50 text-lg"/>
                <h1 className="text-amber-50">Ranking</h1>
              </Link>
              <Link to="/admin/configuracoes" className={getLinkClass("/admin/configuracoes")}>
                <IoSettingsOutline className="text-amber-50 text-lg"/>
                <h1 className="text-amber-50">Configurações</h1>
              </Link>
            </div>
          </div>
          <BotaoSair />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 ml-65 h-screen overflow-y-auto p-5">
        <Outlet />
      </div>
    </div>
  );
}
