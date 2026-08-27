import { Link } from "react-router-dom";

function Categoria1() {
  return (
    <>
    <div className="bg-[#4E56C0] h-dvh flex justify-center">
      <div className="bg-[#9B5DE0] backdrop-blur-md border border-white/20
        d-2xl flex flex-col justify-center items-center text-center w-150 h-100 gap-5 m-20 rounded-md">
        <h1 className="text-4xl font-extrabold text-[#FDCFFA] bg-clip-text bg-gradient-to-red from-cyan-400 to-blue-500 mb-2">
          Categoria 1
        <Link to="/">
          <button className="px-6 py-2 bg-[#D78FEE] hover:bg-[#e9a6ff] text-[#FDCFFA] font-bold rounded-lg transition-all text-3xl">
            Voltar para a Página Inicial
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Categoria1;