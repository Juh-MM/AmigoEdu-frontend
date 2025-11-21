import { useState, useEffect } from "react";

export default function Link() {
  const [copied, setCopied] = useState(false);
  const [link_indicacao, setLink] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setLink(userData.link_indicacao);
    }
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link_indicacao);
      setCopied(true);
      alert("Link copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar o link: ", err);
      alert("Falha ao copiar o link.");
    }
  };

  return (
    <div
      className="
        w-full 
        flex 
        flex-col 
        sm:flex-row 
        gap-3 
        items-center
      "
    >
      {/* Caixa do link */}
      <div
        className="
          flex 
          flex-row 
          gap-2 
          bg-neutral-50 
          h-11 
          rounded-3xl 
          items-center 
          w-full 
          shadow-sm 
          px-4 
          overflow-hidden
        "
      >
        <span className="text-sky-800 font-semibold whitespace-nowrap">
          Meu link de indicação:
        </span>

        <span
          className="
            text-gray-500 
            text-sm 
            truncate 
            max-w-full
          "
        >
          {link_indicacao}
        </span>
      </div>

      {/* Botão */}
      <button
        className="
          bg-amber-400
          text-amber-50 
          h-11 
          w-full 
          sm:w-auto 
          px-6 
          flex 
          items-center 
          justify-center 
          rounded-3xl 
          shadow-sm 
          hover:bg-amber-500 
          cursor-pointer
          whitespace-nowrap
        "
        onClick={copyLink}
      >
        Copiar link
      </button>
    </div>
  );
}
