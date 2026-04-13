import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../../models/Categoria";
import type Produtos from "../../../../models/Produtos";
import { atualizar, buscar, cadastrar } from "../../../../services/Service";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    produto: "",
  });
  const [produto, setProduto] = useState<Produtos>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria.id !== 0 ? categoria : null,
    });
  }, [categoria]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: name === "preco" ? parseFloat(value) : value,
      categoria: categoria,
    });
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso");
        navigate("/produtos");
      } catch (error) {
        alert("Erro ao atualizar o Produto");
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert("Produto cadastrado com sucesso");
        navigate("/produtos");
      } catch (error) {
        alert("Erro ao cadastrar o Produto");
      }
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mb-8">
      <h1 className="text-4xl text-center my-8 font-bold">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form
        onSubmit={gerarNovoProduto}
        className="flex flex-col w-1/2 gap-4 bg-slate-100 p-8 rounded-2xl shadow-lg"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            value={produto.nome}
            onChange={atualizarEstado}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-300 rounded p-2 focus:border-indigo-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="preco">Preço</label>
          <input
            value={produto.preco}
            onChange={atualizarEstado}
            type="number"
            step="0.01"
            placeholder="Preço"
            name="preco"
            required
            className="border-2 border-slate-300 rounded p-2 focus:border-indigo-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="foto">Link da Foto</label>
          <input
            value={produto.foto}
            onChange={atualizarEstado}
            type="text"
            placeholder="URL da imagem"
            name="foto"
            required
            className="border-2 border-slate-300 rounded p-2 focus:border-indigo-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="categoria">Categoria do Produto</label>
          <select
            name="categoria"
            className="border-2 border-slate-300 p-2 rounded focus:border-indigo-500 outline-none"
            onChange={(e) =>
              buscar(`/categorias/${e.currentTarget.value}`, setCategoria)
            }
          >
            <option value="" disabled selected>
              Selecione uma Categoria
            </option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={categoria.id === 0}
          className="rounded disabled:bg-slate-300 bg-indigo-800 hover:bg-indigo-900 text-white font-bold w-full mt-4 py-3 cursor-pointer transition-colors shadow-md"
        >
          {id !== undefined ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
