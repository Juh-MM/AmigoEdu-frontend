import { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";

export default function Profile() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const userDataString = localStorage.getItem('user');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setNome(userData.nome);
            setEmail(userData.email);
        }
    }, []);

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