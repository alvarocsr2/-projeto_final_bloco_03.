import { useEffect, useState } from "react";
import { buscar } from "../../../../services/Service";
import type Produtos from "../../../../models/Produtos";
import CardProdutos from "../cardprodutos/CardProdutos";

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col mx-2">
        {produtos.length === 0 && (
          <p className="text-center text-2xl my-4">Carregando produtos...</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <CardProdutos key={produto.id} prod={produto} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListarProdutos;
