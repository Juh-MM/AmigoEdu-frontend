import { MdOutlineContentCopy } from "react-icons/md";
import { useState} from "react";

export default function Link() {
    const [copied, setCopied] = useState(false);
    const link = "https://react-icons.github.io/react-icons/search/#q=copy"; // link fixo provisorio

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(link.toString());
            setCopied(true);
            console.log('Link copiado para a área de transferência!');
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Falha ao copiar o link: ', err);
        }
    };
    
    return(
        <div className="flex flex-col gap-2 w-200">
            <h1 className="">Link para indicação:</h1>
            <div className="p-3 bg-neutral-50 rounded-xl flex flex-row justify-between items-center shadow-md">
                <span className="text-yellow-400 font-semibold">https://react-icons.github.io/react-icons/search/#q=copy</span>
                <button onClick={copyLink} className="flex flex-row gap-2 items-center text-sm hover:font-semibold">
                    <MdOutlineContentCopy className="text-lg" />
                    Copiar Link
                    </button>
            </div>
        </div>
    )
}