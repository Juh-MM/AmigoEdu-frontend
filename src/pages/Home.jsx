import { useContext, useState, useEffect } from 'react';
import Overview from '../components/Overview';
import Link from '../components/Link';
import { AuthContext } from '../services/authContext';

export default function Home() {
    const { user } = useContext(AuthContext)
    const [nome, setNome] = useState('');
    useEffect(() => {
        const userDataString = localStorage.getItem('user');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setNome(userData.nome);
        }
    }, []);

    return(
            <div className="flex flex-col gap-10 m-5 ml-0 mt-0 justify-center">
                <div className="flex flex-row text-4xl gap-1">
                    <h1>Olá,</h1> <h1 className="font-semibold">{nome}! 👋</h1>
                </div>
                
                <Link />
                <Overview />
            </div>
    )
}