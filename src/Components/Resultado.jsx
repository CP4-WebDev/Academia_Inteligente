import "../css/resultado.css";

export const Tabela = ({ resultado }) => {
  const valor = Number(resultado);

  let status = "";
  let classe = "";

  if (valor < 18.5) {
    status = "Abaixo do peso";
    classe = "baixo";
  } else if (valor < 25) {
    status = "Peso normal";
    classe = "normal";
  } else if (valor < 30) {
    status = "Sobrepeso";
    classe = "sobrepeso";
  } else {
    status = "Obesidade";
    classe = "obesidade";
  }

  return (
    <div className="resultado-container">
      <div className="resultado-card">
        <h2>Seu Resultado</h2>

        <p className="resultado-valor">
          {valor.toFixed(2)}
        </p>

        <p className={`resultado-status ${classe}`}>
          {status}
        </p>
      </div>
    </div>
  );
};

export default Tabela;