import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import BotaoSair from "./BotaoSair";
import Logo from '../assets/Logo.png';

export default function Sidebar() {
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
    { to: "/home", icon: <AiOutlineHome className="text-amber-50 text-xl" />, label: "Visão Geral" },
    { to: "/metas", icon: <FaRegCheckSquare className="text-amber-50 text-lg" />, label: "Metas" },
    { to: "/ranking", icon: <LuCrown className="text-amber-50 text-lg" />, label: "Ranking" },
    { to: "/impacto", icon: <TbWorld className="text-amber-50 text-lg" />, label: "Impacto" },
    { to: "/configuracoes", icon: <IoSettingsOutline className="text-amber-50 text-lg" />, label: "Configurações" },
  ];

  return (
    <>
      {/* Desktop / md+ sidebar */}
      <aside className="hidden md:flex flex-col w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm h-[calc(100vh-2.5rem)] m-5">
        <div className="flex flex-col w-full gap-10 items-center">
          <img src={Logo} className="w-36 object-contain" alt="Logo" />
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
          <BotaoSair className="w-full flex items-center gap-3 justify-center bg-amber-50 text-sky-700 py-3 rounded-xl hover:opacity-95" >
            <span className="font-semibold">Sair</span>
          </BotaoSair>
        </div>
      </aside>

      {/* Mobile bottom nav */}
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
              onClick={() => {
                const evt = new CustomEvent("app:logout");
                window.dispatchEvent(evt);
              }}
              aria-label="Sair"
              title="Sair"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-amber-50/30 text-white hover:opacity-95 px-2 py-2"
            >
              {/* ícone de logout - mantive texto no BotaoSair do desktop */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
