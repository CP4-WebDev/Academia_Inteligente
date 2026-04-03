import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sobre from "./routes/Sobre";
import Contato from "./routes/Contato";
import Planos from "./routes/Plano";
import Imc from "./components/Imc";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imc" element={<Imc />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;