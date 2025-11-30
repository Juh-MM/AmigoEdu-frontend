import FormDadosPessoais from "../components/FormDadosPessoais";
import FormNotificacoes from "../components/FormNotificacoes";

export default function Configuracoes() {
    return (
        <div className="flex flex-col gap-5 m-5 mb-30 md:m-0 md:mr-5 md:mb-0 justify-center">
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