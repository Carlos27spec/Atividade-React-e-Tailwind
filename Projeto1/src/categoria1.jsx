import { Link } from "react-router-dom";
import Produtos from "./componentes/produtos";
import { produtosCategoria1 } from "./componente/produtos";

function Categoria1() {
  return (
    <div className="bg-[#4E56C0] min-h-dvh flex justify-center py-10">
      <div className="bg-[#9B5DE0] backdrop-blur-md border border-white/20
        rounded-md flex flex-col items-center text-center w-full max-w-full  gap-8 m-5 p-8">
        <h1 className="text-4xl font-extrabold text-[#FDCFFA] bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          Categoria 1
        </h1>

        <div className="grid grid-cols-4 gap-6 w-full">
          <Produtos listaProdutos={produtosCategoria1} />
        </div>

        <Link to="/">
          <button className="px-6 py-2 bg-[#D78FEE] hover:bg-[#e9a6ff] text-[#FDCFFA] font-bold rounded-lg transition-all text-3xl">
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categoria1;