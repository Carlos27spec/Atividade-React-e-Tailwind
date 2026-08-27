function Produtos({ listaProdutos }) {
  return (
    <>
      {listaProdutos.map((produto, i) => (
        <div
          key={i}
          className="bg-blue-100 p-4 rounded-md shadow-md h-full w-full flex flex-col justify-between items-center gap-3"
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

export default Produtos;