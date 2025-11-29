import FormDadosPessoais from "../components/FormDadosPessoais";
import FormNotificacoes from "../components/FormNotificacoes";

export default function Configuracoes() {
    return (
        <div className="flex flex-col gap-5 m-5 ml-0 mt-0 justify-center">
            <div className="flex flex-col text-4xl gap-1"> 
                <h1 className="font-semibold">Configurações</h1>
                <p className="text-base">Gerencie suas preferências e dados pessoais!</p>
            </div>
            <div className="flex flex-col gap-5">
                <FormDadosPessoais />
                <FormNotificacoes />
            </div>
        </div>
    );
}