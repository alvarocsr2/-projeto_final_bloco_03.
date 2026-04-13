import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './assets/components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/home" element={<Home />} />
							<Route path="/temas" element={<ListaCategoria />} />
							<Route path="/cadastrartema" element={<FormCategoria />} />
							<Route path="/editartema/:id" element={<FormCategoria />} />
							<Route path="/deletartema/:id" element={<DeletarCategoria />} />
							<Route path="/postagens" element={<ListaProdutos />} />
							<Route path="/cadastrarpostagem" element={<FormProdutos />} />
							<Route path="/editarpostagem/:id" element={<FormProdutos />} />
							<Route path="/deletarpostagem/:id" element={<DeletarProdutos />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
    </>
  )
}

export default App