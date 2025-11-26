import { AiOutlineHome } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import BotaoSair from "./BotaoSair";
import Logo from '../assets/Logo.png';
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const { pathname } = useLocation(); // <-- adicionada esta linha

    const getLinkClass = (path) => {
    const baseClasses = "flex gap-4 p-2 align-middle font-semibold rounded-2xl px-4 hover:cursor-pointer";
    const activeClasses = "bg-sky-700/50"; 
    const inactiveClasses = "hover:bg-sky-700/70";
    return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
  };

    return(
        <div className="flex flex-col w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm h-[calc(100vh-2.5rem)] m-5">
            <div className="flex flex-col w-full gap-10 items-center">
                <img src={Logo} className="w-25" alt="Logo do AmigoEdu"/>
                <div className="flex flex-col gap-5 w-full">
                    <Link to="/home" className={getLinkClass("/home")}>
                        <AiOutlineHome className="text-amber-50 text-xl"/>
                        <h1 className="text-amber-50">Visão Geral</h1>
                    </Link>
                    <Link to="/metas" className={getLinkClass("/metas")}>
                        <FaRegCheckSquare className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Metas</h1>
                    </Link>
                    <Link to="/ranking" className={getLinkClass("/ranking")}>
                        <LuCrown className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Ranking</h1>
                    </Link>
                    <Link to="/sobre" className={getLinkClass("/sobre")}>
                        <TbWorld className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Sobre</h1>
                    </Link>
                    <Link to="/configuracoes" className={getLinkClass("/configuracoes")}>
                        <IoSettingsOutline  className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Configurações</h1>
                    </Link>
                </div>
            </div>
                <BotaoSair />
            </div>
    )
}