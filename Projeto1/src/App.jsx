import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Card from "./componentes/cardpro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categoria3 from "./categoria3";
import "./componentes/produtos"
import Produtos from "./componentes/produtos";
import Categoria1 from "./categoria1";

function App() {
  return (
  <BrowserRouter>
    <Header />
     <Routes>
        <Route path="/" element={
          <>
            <Card />
              <main className="grid grid-cols-4 gap-4 p-2 h-[calc(100vh-68px)] overflow-y-auto">
                <div className="col-span-4 flex justify-between items-center">
                  <h1 className="font-bold text-4xl">Featured Products</h1>
                  <button className="bg-white text-blue-600 hover:bg-blue-100 border border-gray-300 rounded-md px-4 py-1 text-2xl">
                    View All
                  </button>
                </div>
                <Produtos />
              </main>
            </>
          }
        />
        <Route path="/categoria1" element={<Categoria1 />} />
        <Route path="/categoria3" element={<Categoria3 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;