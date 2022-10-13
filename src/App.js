import "./App.css";
import Header from "./Header";
import Cuerpo from "./Cuerpo";
import Pie from "./Pie";

import Inicio from "./paginas/Inicio";
import Acerca from "./paginas/Acerca";
import Sobremi from "./paginas/Sobremi";
import Camara from "./paginas/Camara";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/sobremi" element={<Sobremi/>} />
          <Route path="/camara" element={<Camara/>} />
        </Routes>
      </BrowserRouter>
      <Cuerpo />
      <Pie />
    </div>
  );
}

export default App;
