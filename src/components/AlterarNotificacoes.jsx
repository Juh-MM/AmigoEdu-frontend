export default function AlterarNotificacoes({ ligado, mudarEstado }) {
  return (
    <div className="flex items-center">
      <div
        onClick={mudarEstado}
        className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
          ligado ? 'bg-sky-700' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            ligado ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
    </div>
  );
}
