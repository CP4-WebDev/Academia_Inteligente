import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sobre from "./routes/Sobre"
import Contato from "./routes/Contato"
import Planos from "./routes/Plano"



function App() {
  return (
    
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="*" element={<Error/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/imc" element={<Imc/>} />
    <Route path="/sobre" element={<Sobre/>} />
    <Route path="/planos" element={<Planos/>} />
    <Route path="/contato" element={<Contato/>} />
    
  </Routes>
  <Footer />
</BrowserRouter>   
  )
}

export default App