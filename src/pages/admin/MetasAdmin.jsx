import { useEffect, useState } from "react";
import api from "../../services/api";
import MetaCardCriar from "../../components/admin/MetaCardCriar";
import FormCriarMeta from "../../components/admin/FormCriarMeta";
import ListaMetas from "../../components/admin/ListaMetas";

export default function MetasAdmin() {
  const [metas, setMetas] = useState([]);
  const [mostrandoForm, setMostrandoForm] = useState(false);
  const [metaEditando, setMetaEditando] = useState(null);

  async function carregarMetas() {
    const res = await api.get("/metas");
    setMetas(res.data || []);
  }

  useEffect(() => {
    carregarMetas();
  }, []);

  function abrirFormularioCriar() {
    setMetaEditando(null);
    setMostrandoForm(true);
  }

  function abrirFormularioEditar(meta) {
    setMetaEditando(meta);
    setMostrandoForm(true);
  }

  function atualizarLista() {
    carregarMetas();
    setMostrandoForm(false);
    setMetaEditando(null);
  }

  return (
    <div className="p-6 w-full">

      {/* Título da página */}
      <h3 className="text-[35px] font-semibold mb-4">Criar Metas</h3>

      {/* Card criar meta ou formulário */}
      <div className="flex w-full justify-center">
        {!mostrandoForm ? (
          <MetaCardCriar onAbrirFormulario={abrirFormularioCriar} />
        ) : (
          <FormCriarMeta
            metaParaEditar={metaEditando}
            onSucesso={atualizarLista}
            onCancelar={() => setMostrandoForm(false)}
          />
        )}
      </div>

      {/* Lista */}
      <ListaMetas
        metas={metas}
        onAtualizarLista={carregarMetas}
        onEditar={abrirFormularioEditar}
      />
    </div>
  );
}
