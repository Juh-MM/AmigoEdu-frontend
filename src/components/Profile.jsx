import { useState, useContext } from 'react';
import { AuthContext } from "../services/authContext";
import { CgProfile } from "react-icons/cg";

export default function Profile() {
    const { user } = useContext(AuthContext);
    const nome = user?.nome || "Usuário";
    const email = user?.email || "E-mail";

    return(
        <div className="flex flex-row justify-end m-5">
            <div className="flex flex-row gap-2 items-center">
                <div className="flex flex-col items-end">
                    <span className="text-sm text-sky-900">{nome}</span>
                    <span className="text-xs">{email}</span>
                </div>
                <CgProfile className="text-4xl" />
            </div>
            
        </div>
    )
}