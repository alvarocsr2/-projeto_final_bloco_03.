import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import ListarCategorias from "./assets/components/categorias/listacategoria/ListarCategoria";
import DeletarProduto from "./assets/components/produtos/deletarprodutos/DeletarProdutos";
import FormProduto from "./assets/components/produtos/formprodutos/FormProdutos";
import ListarProdutos from "./assets/components/produtos/listaprodutos/ListarProdutos";
import FormCategoria from "./assets/components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./assets/components/categorias/deletarcategoria/DeletarCategoria";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh] bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/cadastrarProduto" element={<FormProduto />} />
          <Route path="/editarProduto/:id" element={<FormProduto />} />
          <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
