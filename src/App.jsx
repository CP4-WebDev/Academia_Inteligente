import{useState} from 'react'
import Resultado from './Components/Resultado' 
import Header from "./components/Header";

function App() {

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc);
    } else {
      alert("Por favor, insira valores válidos para peso e altura.");
    }
  };

  // 👉 não precisa mais de useEffect
  const mostrarResultado = resultado > 0;

  return (
    <section className="container">
      <div className="box">
        <Header />

        <form>
          <div>
            <label htmlFor="altura">
              Altura <span>(ex: 1.80)</span>
            </label>
            <input
              id="altura"
              type="number"
              step="0.01"
              placeholder="Digite sua altura"
              onChange={({ target }) =>
                setAltura(parseFloat(target.value) || 0)
              }
            />
          </div>

          <div>
            <label htmlFor="peso">
              Peso <span>(ex: 65)</span>
            </label>
            <input
              id="peso"
              type="number"
              step="0.01"
              placeholder="Digite seu peso"
              onChange={({ target }) =>
                setPeso(parseFloat(target.value) || 0)
              }
            />
          </div>
          <button type="button" onClick={calcularIMC}>
            Calcular
          </button>
        </form>
      </div>

      {mostrarResultado && (
        <Resultado resultado={resultado.toFixed(2)} />
      )}
    </section>
  );
}

export default App;