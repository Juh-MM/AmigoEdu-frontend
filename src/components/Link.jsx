import { useState, useEffect } from "react";

export default function Link() {
    const [copied, setCopied] = useState(false);
    const [link_indicacao, setLink] = useState("");

    useEffect(() => {
        const userDataString = localStorage.getItem('user');
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setLink(userData.link_indicacao);
        };
    }, []);

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(link_indicacao);
            setCopied(true);
            alert('Link copiado!');
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Falha ao copiar o link: ', err);
            alert('Falha ao copiar o link.');
        }
    };
    
    return(
        <div className="flex flex-row gap-2 w-full ">
            <div className="flex flex-row gap-2 bg-neutral-50 h-11 rounded-3xl items-center w-full shadow-sm">
                <span className="text-sky-800 font-semibold pl-4">Meu link de indicação:</span>
                <span className="text-gray-500">{link_indicacao}</span>
            </div>
            <div>
                <button className="bg-amber-400 w-full text-amber-50 h-11 text-center text-nowrap p-5 px-7 items-center flex justify-center rounded-3xl shadow-sm hover:bg-amber-500 cursor-pointer" onClick={copyLink}>Copiar link</button>
            </div>
        </div>
    )
}