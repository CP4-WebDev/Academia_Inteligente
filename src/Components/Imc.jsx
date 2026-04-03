import { useState } from "react";
import { Tabela } from "./Resultado";
import Header from "./Header";
import "../css/global.css";
import "../css/estilo.css";

function Imc() {

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

  const mostrarResultado = resultado > 0;

  return (
    <section className="container">
      <div className="box">
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
  <Tabela resultado={resultado} />
)}

  
    </section>
  );
}

export default Imc;