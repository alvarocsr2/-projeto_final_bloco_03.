import { useEffect, useState } from "react";
import { buscar } from "../../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<any[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.log("Erro ao buscar categorias", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col mx-2">
        {categorias.length === 0 && (
          <p className="text-center text-2xl my-4">Carregando...</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListarCategorias;
