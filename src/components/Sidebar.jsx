import { AiOutlineHome } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

import BotaoSair from "./BotaoSair";
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return(
        <div className="flex flex-col h-220 w-70 m-5 mr-0 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm">
            <div className="flex flex-col w-full gap-10 items-center">
                <img src={Logo} className="w-25" alt="Logo do AmigoEdu"/>
                <div className="flex flex-col gap-5 w-full">
                    <Link to="/home" className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70 hover:cursor-pointer">
                        <AiOutlineHome className="text-amber-50 text-xl"/>
                        <h1 className="text-amber-50">Visão Geral</h1>
                    </Link>
                    <Link to="/metas" className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70 hover:cursor-pointer">
                        <FaRegCheckSquare className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Metas</h1>
                    </Link>
                    <Link to="/ranking" className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70 hover:cursor-pointer">
                        <LuCrown className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Ranking</h1>
                    </Link>
                    <Link to="/impact" className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70 hover:cursor-pointer">
                        <TbWorld className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Impacto</h1>
                    </Link>
                    <Link to="/configuracoes" className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70 hover:cursor-pointer">
                        <IoSettingsOutline  className="text-amber-50 text-lg"/>
                        <h1 className="text-amber-50">Configurações</h1>
                    </Link>
                </div>
            </div>
                <BotaoSair />
            </div>
        </div>
    )
}
