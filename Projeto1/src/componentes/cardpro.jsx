import { useState, useEffect } from "react";

const imagens = [
  "https://www.usevoron.com.br/cdn/shop/files/WhatsAppImage2024-06-25at07.26.56_1.jpg?v=1719334698&width=1445",
  "https://images.kabum.com.br/produtos/fotos/sync_mirakl/715914/xlarge/PC-Gamer-Ryzen-7-5700x-32gb-Ddr4-3200mhz-RTX-4060-8GB-SSD-1TB-Nvme-Branco-Full-White-Premium-Water-Cooler-RGB-E-Cabos-Sleeved_1739825434.png",
  "https://tfdfjz.vteximg.com.br/arquivos/ids/360076/tenis-esportivo-adidas-masculino-response-super-ji4320-azul-ji4320-1.jpg?v=639072008285900000",
];

function Card() {
  const [indice, setIndice] = useState(0);

  function proximo() {
    setIndice((i) => (i + 1) % imagens.length);
  }

  function anterior() {
    setIndice((i) => (i - 1 + imagens.length) % imagens.length);
  }

  // Rola sozinho a cada 3.5s
  useEffect(() => {
    const timer = setInterval(proximo, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w h-[500px] bg-[#90CAF9] rounded-md flex items-stretch overflow-hidden">
      {/* Lado esquerdo: texto */}
      <div className="w-1/2 flex flex-col justify-center items-start text-left p-10 gap-4">
        <h1 className="text-4xl font-bold text-slate-800">
          Aqui você encontra os melhores produtos!
        </h1>
        <p className="text-lg text-slate-600">
          Desde computadores até as melhores roupas!
        </p>
      </div>
 
      {/* Lado direito: carrossel */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Produto ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-1000 ease-in-out ${
              i === indice ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}


      {/* Setas */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-slate-800 w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-all"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md text-slate-800 w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-all"
      >
        ›
      </button>

      {/* Bolinhas */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {imagens.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndice(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === indice ? "w-8 bg-slate-800" : "w-2.5 bg-slate-400 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default Card;