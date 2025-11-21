import { useState, useEffect } from 'react';
import Overview from '../components/Overview';
import Link from '../components/Link';

export default function Home() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem('user');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setNome(userData.nome);
    }
  }, []);

  return (
    <div className="
      w-full 
      max-w-5xl 
      mx-auto 
      px-4 
      py-6 
      flex 
      flex-col 
      gap-10 
    ">
      
      {/* Título Responsivo */}
      <div className="flex flex-col sm:flex-row sm:items-center text-3xl sm:text-4xl lg:text-5xl gap-2">
        <h1>Olá,</h1>
        <h1 className="font-semibold">{nome}! 👋</h1>
      </div>

      {/* Link (botões/atalhos) */}
      <div className="w-full">
        <Link />
      </div>

      {/* Overview */}
      <div className="w-full">
        <Overview />
      </div>

    </div>
  );
}
