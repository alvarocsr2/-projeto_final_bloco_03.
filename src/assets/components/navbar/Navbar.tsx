import {
  MagnifyingGlass,
  UserCircle,
  ShoppingCart,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-3 bg-indigo-900 text-white">
        <div className="container flex justify-between items-center mx-8">
          <div className="flex items-center ">
            <span className="font-bold text-xl uppercase tracking-tight">
              <Link to="/home" className="text-2xl font-bold">
                <img
                  width={208}
                  src="src/assets/logo.png"
                  alt="Logo Farmácia"
                />
              </Link>
            </span>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="h-9 w-[500px] rounded-l-md px-4 bg-white text-black text-sm focus:outline-none"
              />
              <button className="h-9 px-4 bg-blue-600 rounded-r-md flex items-center justify-center cursor-pointer">
                <MagnifyingGlass size={20} weight="bold" />
              </button>
            </div>

            <div className="flex gap-6 items-center text-s font-medium">
              <Link to="/produtos" className="hover:underline cursor-pointer">
                Produtos
              </Link>

              {/* Link para a listagem de categorias */}
              <Link to="/categorias" className="hover:underline cursor-pointer">
                Categorias
              </Link>

              {/* Link para o formulário de cadastro */}
              <Link
                to="/cadastrarCategoria"
                className="hover:underline cursor-pointer"
              >
                Cadastrar Categoria
              </Link>

              <div className="flex gap-4 ml-2">
                <UserCircle
                  size={38}
                  weight="light"
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                />
                <ShoppingCart
                  size={38}
                  weight="light"
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
