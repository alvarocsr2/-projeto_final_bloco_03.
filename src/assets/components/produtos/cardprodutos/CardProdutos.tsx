import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";
import type Produtos from "../../../../models/Produtos";

interface CardProdutosProps {
  prod: Produtos;
}

function CardProdutos({ prod }: CardProdutosProps) {
  return (
    <div className="border-slate-200 border flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex w-full bg-indigo-900 py-3 px-4 items-center gap-4 text-white">
          <img
            src={prod.foto}
            alt={prod.nome}
            className="h-12 w-12 rounded-full object-cover border-2 border-white"
          />
          <h3 className="text-lg font-bold uppercase tracking-tighter">
            {prod.nome}
          </h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-slate-500 italic mb-2">
            Categoria: {prod.categoria?.descricao || "Geral"}
          </p>
          <p className="text-2xl font-bold text-indigo-900">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(prod.preco)}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarProduto/${prod.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center py-2 gap-2 transition-all cursor-pointer"
        >
          <Pencil size={24} />
          Editar
        </Link>
        <Link
          to={`/deletarProduto/${prod.id}`}
          className="text-white bg-red-400 hover:bg-red-600 w-full flex items-center justify-center py-2 gap-2 transition-all cursor-pointer"
        >
          <Trash size={24} />
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;
