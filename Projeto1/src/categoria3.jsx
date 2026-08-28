import { Link } from "react-router-dom";
import Produtos from "./componentes/produtos";
import { produtosCategoria3} from "./componente/produtos";

function Categoria3() {
  return (
    <div className="bg-[#4300FF] min-h-dvh flex justify-center py-10">
      <div className="bg-[#0065F8] backdrop-blur-md border border-white/20
        rounded-md flex flex-col items-center text-center w-full max-w-full  gap-8 m-5 p-8">
        <h1 className="text-4xl font-extrabold text-[#00FFDE] bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          Categoria 3
        </h1>

        <div className="grid grid-cols-4 gap-6 w-full">
          <Produtos listaProdutos={produtosCategoria3} />
        </div>

        <Link to="/">
          <button className="px-6 py-2 bg-[#00CAFF] hover:bg-[#007a99] text-[#00FFDE] font-bold rounded-lg transition-all text-3xl">
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categoria3;