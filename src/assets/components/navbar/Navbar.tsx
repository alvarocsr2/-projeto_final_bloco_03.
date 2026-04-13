import { MagnifyingGlass, UserCircle, ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            {/* Removida a borda inferior para eliminar a linha azul */}
            <div className='w-full flex justify-center py-3 bg-indigo-900 text-white'>

                <div className="container flex justify-between items-center mx-8">
                    
                    <div className='flex items-center '>
                        <span className="text-4xl"></span>
                        <span className='font-bold text-xl uppercase tracking-tight'>
                           <Link to='/home' className="text-2xl font-bold"><img  width={208} src="src\assets\logo.png" alt="" /></Link>
                        </span>
                    </div>

                    <div className="flex items-center gap-12"> 
                        <div className='flex items-center'>
                            <input 
                                type="text" 
                                placeholder="Pesquisar..." 
                                className='h-9 w-[500px] rounded-l-md px-4 bg-white text-black text-sm focus:outline-none'
                            />
                            <button className='h-9 px-4 bg-blue-600 rounded-r-md flex items-center justify-center'>
                                <MagnifyingGlass size={20} weight="bold" />
                            </button>
                        </div>

                        <div className='flex gap-6 items-center text-s font-medium'>
                            <span className="cursor-pointer"  >Produtos</span>
                            <span className="cursor-pointer">Categorias</span>
                            <span className="cursor-pointer">Cadastrar Categoria</span>
                            
                            <div className='flex gap-4 ml-2'>
                                <UserCircle size={38} weight="light" className="cursor-pointer" />
                                <ShoppingCart size={38} weight="light" className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar