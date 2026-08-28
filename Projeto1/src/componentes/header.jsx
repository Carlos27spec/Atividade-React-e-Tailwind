import { Link, useLocation } from "react-router-dom";

const coresPorRota = {
  "/": "#2196F3",
  "/categoria1": "#9B5DE0",
  "/categoria2": "#E8DFCA",
  "/categoria3": "#00CAFF",
};

function Header() {
  const location = useLocation();
  const corAtual = coresPorRota[location.pathname] || "#2196F3";

    return(
           <header
            className="cabecalho flex justify-between items-center h-17 transition-colors duration-300" style={{ backgroundColor: corAtual }}>
            <div className="text-[#0D47A1] font-bold font-sans m-5">
            <Link to="/" className="cursor-pointer hover:text-cyan-500 transition-all">
            <img src="./src/assets/shopplus-logo.png" alt="" width={150} />
            </Link>
            </div>
            <div className="flex justify-between items-center gap-5 text-[#0D47A1] m-5 font-bold font-sans">
            <Link to="/categoria1" className="cursor-pointer hover:text-cyan-500 transition-all">
            <p>Tenis</p>
            </Link>
            <Link to="/categoria2" className="cursor-pointer hover:text-cyan-500 transition-all">
            <p>Camisetas</p>
            </Link>
            <Link to="/categoria3" className="cursor-pointer hover:text-cyan-500 transition-all">
              <p>Computadores e Notebooks</p>
            </Link>
            </div>
            <div className="flex justify-between items-center gap-5 text-[#0D47A1] m-5 font-bold font-sans">
                <img src="./src/assets/lupa.webp" alt="" width={30}/>
                <img src="./src/assets/perfil.png" alt="" width={30} />
                <img src="./src/assets/carrinho.png" alt="" width={30} />
            </div>
        </header>
    );
}

export default Header