import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserFriends, FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import BotaoSair from "../../components/BotaoSair";
import Logo from '../../assets/Logo.png';

export default function MenuLateral()  {
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

  return (
    <>
      <aside className="hidden md:flex flex-col w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm h-[calc(100vh-2.5rem)] m-5">
        <div className="flex flex-col w-full gap-10 items-center">
          <img src={Logo} className="w-25" alt="Logo do Admin"/>
          <div className="flex flex-col gap-5 w-full">
            {links.map(link => (
              <Link key={link.to} to={link.to} className={getLinkClassDesktop(link.to)} aria-current={pathname === link.to ? "page" : undefined}>
                {link.icon}
                <h1 className="text-amber-50">{link.label}</h1>
              </Link>
            ))}
          </div>
        </div>

        <BotaoSair />
      </aside>

      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl bg-sky-600/95 backdrop-blur-sm rounded-2xl px-3 py-2 flex justify-between items-center z-50 shadow-lg">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={getLinkClassMobile(link.to)}
            aria-current={pathname === link.to ? "page" : undefined}
            title={link.label}
          >
            {link.icon}
            <span className="text-[10px] leading-none hidden sm:block">{link.label}</span>
          </Link>
        ))}

        <div className="ml-2">
          <div className="flex items-center justify-center">
            <div className="min-w-[56px] min-h-[56px] flex items-center justify-center">
              <BotaoSair />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
