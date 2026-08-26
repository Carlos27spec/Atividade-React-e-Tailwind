import { Link } from "react-router-dom";

function Categoria3() {
  return (
    <div className="bg-[#E3F2FD] h-dvh flex justify-center">
      <div className="bg-white backdrop-blur-md border border-white/20
        d-2xl flex flex-col justify-center items-center text-center w-150 h-100 gap-5 m-20 rounded-md">
        <h1 className="text-4xl font-extrabold text-[#0D47A1] bg-clip-text bg-gradient-to-red from-cyan-400 to-blue-500 mb-2">
          Categoria 3
        </h1>
        <p className="text-slate-900 text-2xl mb-4">
          Esta é a página da Categoria 3. Aqui você pode encontrar produtos relacionados a esta categoria.
        </p>
        <Link to="/">
          <button className="px-6 py-2 bg-[#2196F3] hover:bg-[#1976D2] text-[#0D47A1] font-bold rounded-lg transition-all text-3xl">
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Categoria3;