import FormDadosPessoais from "../components/FormDadosPessoais";
import FormNotificacoes from "../components/FormNotificacoes";

export default function Configuracoes() {
  return (
    <main className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 py-6">

      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-sky-950">
          Configurações
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-1">
          Gerencie suas preferências e dados pessoais!
        </p>
      </header>

      {/* Conteúdo */}
      <section className="w-full max-w-4xl mx-auto flex flex-col gap-8">

        <FormDadosPessoais />
        <FormNotificacoes />

      </section>
    </main>
  );
}
