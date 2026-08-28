import { useLocation } from "react-router-dom";

const coresPorRota = {
  "/": "#2196F3",
  "/categoria1": "#9B5DE0",
  "/categoria2": "#E8DFCA",
  "/categoria3": "#00CAFF",
};

function Footer() {
  const location = useLocation();
  const corAtual = coresPorRota[location.pathname] || "#2196F3";

  return (
    <footer
      className="rodape flex justify-between items-center transition-colors duration-300"
      style={{ backgroundColor: corAtual }}
    >
      <h2 className="text-[#0D47A1] h-17 flex items-center ml-5 font-bold">Todos os Direitos Reservados a SHOP+</h2>
      <div className="flex"> 
      <img className="mr-5" src="/src/assets/Instagram_icon.png" alt="" width={30} height={30} />
      <img className="mr-5" src="/src/assets/whats.png" alt="" width={30} height={30} />
      </div>
    </footer>
  );
}

export default Footer;