function Entrega(){
    return(
        <>
      <div className="grid grid-cols-4 column-4 gap-4 p-2 "> 
        <div className="bg-white border border-blue-600 rounded-md p-4 flex flex-col items-center gap-4 w-60">
            <img src="https://imagepng.org/wp-content/uploads/2019/05/caminhao-frete-icone-2.png" alt=""  width={100}/>
            <h1 className="text-blue-600 font-bold text-xl">Frete Grátis para todo o Brasil menos em Santana!</h1>
        </div>
        <div className="bg-white border border-blue-600 rounded-md p-4 flex flex-col items-center gap-4 w-60">
            <img src="https://cdn-icons-png.flaticon.com/512/818/818911.png" alt=""  width={100}/>
            <h1 className="text-blue-600 font-bold text-xl">Pagamento com Total Segurança!</h1>
        </div>
        <div className="bg-white border border-blue-600 rounded-md p-4 flex flex-col items-center gap-4 w-60">
            <img src="https://cdn-icons-png.flaticon.com/512/820/820508.png" alt=""  width={100}/>
            <h1 className="text-blue-600 font-bold text-xl">Suporte 24 horas!</h1>
        </div>
        <div className="bg-white border border-blue-600 rounded-md p-4 flex flex-col items-center gap-4 w-60">
            <img src="https://cdn-icons-png.flaticon.com/512/4305/4305512.png" alt=""  width={100}/>
            <h1 className="text-blue-600 font-bold text-xl">Reembolso em até 48 horas!</h1>
        </div>
       </div>  
        </>
    )
}

export default Entrega;