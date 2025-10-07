import { AiOutlineHome } from "react-icons/ai";
import { FaRegCheckSquare } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

import Logo from '../assets/Logo.png'

import { Link } from 'react-router-dom';

export default function Sidebar() {
    return(
        <div className="flex flex-col h-215 w-60 m-5 p-5 gap-4 bg-sky-600 rounded-3xl justify-between text-sm">
            <div className="flex flex-col w-full gap-10 items-center">
                <img src={Logo} className="w-25" alt="Logo do AmigoEdu"/>
                <div className="flex flex-col gap-5 w-full">
                    <div div className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70">
                        <AiOutlineHome className="text-amber-50 text-xl"/>
                        <Link to="/"  className="text-amber-50">Visão Geral</Link>
                    </div>
                    <div div className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70">
                        <FaRegCheckSquare className="text-amber-50 text-lg"/>
                        <Link to="/"  className="text-amber-50">Metas</Link>
                    </div>
                    <div div className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70">
                        <LuCrown className="text-amber-50 text-lg"/>
                        <Link to="/"  className="text-amber-50">Ranking</Link>
                    </div>
                    <div div className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70">
                        <TbWorld className="text-amber-50 text-lg"/>
                        <Link to="/"  className="text-amber-50">Impacto</Link>
                    </div>
                    <div div className="flex gap-4 p-2 align-middle bg-sky-700/50 rounded-2xl px-4 hover:bg-sky-700/70">
                        <IoSettingsOutline  className="text-amber-50 text-lg"/>
                        <Link to="/"  className="text-amber-50">Configurações</Link>
                    </div>
                </div>
            </div>


            <div className="flex gap-4 p-2 w-25 justify-center bg-sky-700/50 rounded-2xl hover:bg-sky-700/70">
                <TbLogout2 className="text-amber-50 text-xl"/>
                <span className="text-amber-50">Sair</span>
            </div>
        </div>
    )
}

//div className=""