import "../css/resultado.css";

export const Tabela = ({ resultado }) => {
  const valor = parseFloat(resultado);

  if (valor < 18.5) {
    return (
      <>
        <td>Abaixo do peso</td>
        <td>Abaixo de 18.5</td>
      </>
    )
  } else if (valor < 25) {
    return (
      <>
        <td>Peso normal</td>
        <td>18.5 - 24.9</td>
      </>
    );
  } else if (valor < 30) {
    return (
      <>
        <td>Sobrepeso</td>
        <td>25 - 29.9</td>
      </>
    );
  } else if (valor < 35) {
    return (
      <>
        <td>Obesidade Grau I</td>
        <td>30 - 34.9</td>
      </>
    );
  } else if (valor < 40) {
    return (
      <>
        <td>Obesidade Grau II</td>
        <td>35 - 39.9</td>
      </>
    );
  } else {
    return (
      <>
        <td>Obesidade Grau III</td>
        <td>Maior ou igual a 40</td>
      </>
    );
  }
<<<<<<< HEAD
};

export default Tabela;
=======
};
>>>>>>> 5f66a5640e781cc920e4f0e640d92ea22c573a48
