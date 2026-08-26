const listaProdutos = [
  {
    nome: "Tênis Esportivo",
    descricao: "Um ótimo tênis para corrida e atividades físicas.",
    img: "https://images.tcdn.com.br/img/img_prod/1125371/tenis_air_max_sc_135_variacao_731_2_5cc9d5fd58d3a726dd80fab5557862e6.png",
  },
  {
    nome: "Camiseta Polo",
    descricao: "Camiseta ideal para aquela ocasião especial.",
    img: "https://hugobossstore.vtexassets.com/arquivos/ids/241038-800-auto/4063534183010-Camisa-Polo-BOSS-Paddy-Verde_1.png?v=638025894952770000",
  },
  {
    nome: "Notebook Positivo",
    descricao: "Notebook potente para uso profissional.",
    img: "https://static.wixstatic.com/media/d71b4c_536735e2f7c94f79aa3953a030193f7a~mv2.png/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/d71b4c_536735e2f7c94f79aa3953a030193f7a~mv2.png",
  },
  {
    nome: "Computador Gamer",
    descricao: "Computador potente para jogos e atividades gráficas.",
    img: "https://shopinfo.vteximg.com.br/arquivos/ids/1722386-1000-1000/1.png?v=638999312414270000",
  }
]

function Produtos(){
    return(
     <>
      {listaProdutos.map((produto, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-md shadow-md h-full w-full flex flex-col justify-between items-center gap-3"
        >
          <img
            src={produto.img}
            alt={produto.nome}
            className="w-full h-100 object-contain bg-gray-300 rounded-md"
          />
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="font-semibold text-slate-800 text-4xl">{produto.nome}</p>
            <p className="text-slate-500">{produto.descricao}</p>
          </div>
          <button className="w-80 bg-blue-600 text-white hover:bg-blue-700 rounded-md py-2 transition-all flex justify-center items-center gap-2">
            <img src="./src/assets/carrinho.png" alt="" width={30} /><p>Buy Now</p>
          </button>
        </div>
      ))}
    </>
    );
}

export default Produtos