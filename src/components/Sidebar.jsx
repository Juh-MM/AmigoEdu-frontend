import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

import Logo from '../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {

    const location = useLocation();
    const pathname = location.pathname;

    const getLinkClass = (path) => {
        const baseClasses = "flex gap-4 p-2 align-middle font-semibold rounded-2xl px-4 hover:cursor-pointer";
        const activeClasses = "bg-sky-700/50"; 
        const inactiveClasses = "hover:bg-sky-700/70";

        return `${baseClasses} ${pathname === path ? activeClasses : inactiveClasses}`;
    };

    return(
        <div className="fixed top-0 left-0 h-screen w-fit p-5 box-border">
            <div className="flex flex-col h-full w-60 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm">
                <div className="flex flex-col w-full gap-10 items-center">
                    <img src={Logo} className="w-25" alt="Logo do AmigoEdu"/>

                    <div className="flex flex-col gap-5 w-full">

                        {/* VISÃO GERAL */}
                        <Link to="/home" className={getLinkClass("/home")}>
                            <AiOutlineHome className="text-amber-50 text-xl"/>
                            <h1 className="text-amber-50">Visão Geral</h1>
                        </Link>

                        {/* USUÁRIOS */}
                        <Link to="/usuarios" className={getLinkClass("/usuarios")}>
                            <FaRegCheckSquare className="text-amber-50 text-lg"/>
                            <h1 className="text-amber-50">Usuários</h1>
                        </Link>

                        {/* NOVO ITEM: SAQUES */}
                        <Link to="/saques" className={getLinkClass("/saques")}>
                            <AiOutlineStar className="text-amber-50 text-lg"/>
                            <h1 className="text-amber-50">Saques</h1>
                        </Link>

                        {/* RANKING (mantido) */}
                        <Link to="/ranking" className={getLinkClass("/ranking")}>
                            <LuCrown className="text-amber-50 text-lg"/>
                            <h1 className="text-amber-50">Ranking</h1>
                        </Link>

                        {/* IMPACTO → METAS */}
                        <Link to="/metas" className={getLinkClass("/metas")}>
                            <TbWorld className="text-amber-50 text-lg"/>
                            <h1 className="text-amber-50">Metas</h1>
                        </Link>

                        {/* CONFIGURAÇÕES */}
                        <Link to="/configuracoes" className={getLinkClass("/configuracoes")}>
                            <IoSettingsOutline  className="text-amber-50 text-lg"/>
                            <h1 className="text-amber-50">Configurações</h1>
                        </Link>
                    </div>
                </div>

                <div className="flex gap-4 p-2 w-25 justify-center bg-sky-700/50 rounded-2xl hover:bg-sky-700/70 hover:cursor-pointer">
                    <TbLogout2 className="text-amber-50 text-xl"/>
                    <span className="text-amber-50">Sair</span>
                </div>
            </div>
        </div>
    )
}
