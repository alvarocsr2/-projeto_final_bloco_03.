import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../../services/Service";
import type Produtos from "../../../../models/Produtos";
import { ClipLoader } from "react-spinners";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produto, setProduto] = useState<Produtos>({} as Produtos);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.error("Erro ao buscar o produto");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    setIsLoading(true);
    try {
      await deletar(`/produtos/${id}`);
      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o Produto");
    }
    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto mt-10">
      <h1 className="text-4xl text-center my-4 font-bold text-indigo-900">
        Deletar Produto
      </h1>
      <p className="text-center font-semibold mb-6 text-slate-600">
        Você tem certeza de que deseja apagar o produto abaixo?
      </p>
      <div className="border border-slate-200 flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl">
        <header className="py-2 px-6 bg-red-600 text-white font-bold text-2xl uppercase">
          {produto.nome || "Produto"}
        </header>
        <div className="p-8 bg-slate-50 h-full">
          <p className="text-xl text-slate-700 italic">{produto.preco}</p>
        </div>
        <div className="flex">
          <button
            className="text-white bg-slate-400 hover:bg-slate-600 w-full py-3 cursor-pointer transition-colors font-bold"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-white bg-red-500 hover:bg-red-700 flex items-center justify-center cursor-pointer transition-colors font-bold"
            onClick={deletarProduto}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
