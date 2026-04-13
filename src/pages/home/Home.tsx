import { PlusCircle } from "@phosphor-icons/react";

function Home() {
    return (
        <>
            <div className="bg-cyan-100 flex justify-center min-h-screen">
                <div className='container grid grid-cols-2 text-slate-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>

                        <div className="flex justify-around gap-4 mt-4">
                            <button className='rounded bg-indigo-700 text-white py-2 px-8 flex items-center gap-2 hover:bg-indigo-800 transition-all cursor-pointer'>
                                <PlusCircle size={24} />
                                Cadastrar Produto
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img 
                            src="src\assets\paginahome.png" 
                            alt="Imagem da Página Home" 
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;