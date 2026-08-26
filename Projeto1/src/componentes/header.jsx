import { Link } from "react-router-dom";


function Header(){
    return(
        <header className="cabecalho flex justify-between items-center bg-[#2196F3] h-17"  >
            <div className="text-[#0D47A1] font-bold font-sans m-5">
            <img src="./src/assets/shopplus-logo.png" alt="" width={150} />
            </div>
            <div className="flex justify-between items-center gap-5 text-[#0D47A1] m-5 font-bold font-sans">
            <p>Pag1</p>
            <p>pag2</p>     
            <Link to="/categoria3" className="cursor-pointer hover:text-cyan-500 transition-all">
              <p>Categoria 3</p>
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