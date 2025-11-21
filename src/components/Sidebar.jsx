import { AiOutlineHome } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import BotaoSair from "./BotaoSair";
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      {/* SIDEBAR DESKTOP */}
      <div
        className="
          hidden          /* escondida no mobile */
          lg:flex         /* aparece apenas no desktop */
          flex-col 
          h-[90vh] 
          w-64 
          m-5 
          mr-0 
          p-5 
          gap-4 
          bg-sky-600 
          rounded-3xl 
          justify-between 
          shadow-xl
        "
      >
        <div className="flex flex-col w-full gap-10 items-center">
          <img src={Logo} className="w-28" alt="Logo AmigoEdu" />

          <div className="flex flex-col gap-5 w-full">
            <SidebarItem to="/home" icon={<AiOutlineHome />} label="Visão Geral" />
            <SidebarItem to="/metas" icon={<FaRegCheckSquare />} label="Metas" />
            <SidebarItem to="/ranking" icon={<LuCrown />} label="Ranking" />
            <SidebarItem to="/impact" icon={<TbWorld />} label="Impacto" />
            <SidebarItem to="/configuracoes" icon={<IoSettingsOutline />} label="Configurações" />
          </div>
        </div>

        <BotaoSair />
      </div>

      {/* NAVBAR MOBILE (BOTTOM BAR) */}
      <div
        className="
          lg:hidden 
          fixed 
          bottom-0 
          left-0 
          w-full 
          h-16 
          bg-sky-600 
          shadow-xl 
          flex 
          items-center 
          justify-around 
          rounded-t-2xl
          z-50
        "
      >
        <MobileItem to="/home" icon={<AiOutlineHome />} />
        <MobileItem to="/metas" icon={<FaRegCheckSquare />} />
        <MobileItem to="/ranking" icon={<LuCrown />} />
        <MobileItem to="/impact" icon={<TbWorld />} />
        <MobileItem to="/configuracoes" icon={<IoSettingsOutline />} />
      </div>
    </>
  );
}

// COMPONENTE PARA DESKTOP
function SidebarItem({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="
        flex 
        gap-4 
        p-2 
        items-center 
        bg-sky-700/50 
        rounded-2xl 
        px-4 
        hover:bg-sky-700/70 
        cursor-pointer 
        text-amber-50
      "
    >
      <span className="text-xl">{icon}</span>
      <h1 className="font-medium">{label}</h1>
    </Link>
  );
}

// COMPONENTE PARA MOBILE
function MobileItem({ to, icon }) {
  return (
    <Link to={to} className="text-amber-50 flex flex-col items-center text-2xl">
      {icon}
    </Link>
  );
}
