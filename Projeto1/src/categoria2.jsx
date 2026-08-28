import { Link } from "react-router-dom";
import Produtos from "./componentes/produtos";
import { produtosCategoria2 } from "./componente/produtos";

function Categoria2() {
  return (
    <div className="bg-[#F5EFE6] min-h-dvh flex justify-center py-10">
      <div className="bg-[#6D94C5] backdrop-blur-md border border-white/20
        rounded-md flex flex-col items-center text-center w-full max-w-full  gap-8 m-5 p-8">
        <h1 className="text-4xl font-extrabold text-[#CBDCEB] bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          Categoria 2
        </h1>

        <div className="grid grid-cols-4 gap-6 w-full">
          <Produtos listaProdutos={produtosCategoria2} />
        </div>

        <Link to="/">
          <button className="px-6 py-2 bg-[#2868b6] hover:bg-[#5291dd] text-[#CBDCEB] font-bold rounded-lg transition-all text-3xl">
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categoria2;