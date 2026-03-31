import{useEffect, useState} from 'react'
import Resultado from './Components/Resultado' 






function App() {

    const [peso, setPeso]=useState(0);
    const [altura, setAltura]=useState(0);
    const [resultado, setResultado]=useState(0);
    const [mostrarresultado, setMostrarresultado]=useState(false);

    const calcularIMC = () => {
        if(peso > 0 && altura > 0){
            const imc = peso / (altura * altura);
            setResultado(imc.toFixed(2));
        }else{
            alert("Por favor, insira valores válidos para peso e altura.");          
        }
    }

//Efeito colateral para mostrar o resultado quando o resultado for atualizado
useEffect(() =>{
    resultado > 0 ? setMostrarresultado(true):setMostrarresultado(false)

},[resultado])

       return (
    <section className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
            <input
              id="altura"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimal)
              placeholder="Digite sua altura"
              onChange={({target})=>setAltura(parseFloat(target.value))}
            />
          </div>
          
            <div>
            <label htmlFor="peso">Peso<span>(ex: 65)</span></label>
            <input
              id="peso"
              type="number"
              step="0.01" //permite o uso de ponto/virgula (casa decimal)
              placeholder="Digite sua altura"
              onChange={({target})=>setPeso(parseFloat(target.value))}
            />
          </div>
          <button type="button" onClick={calcularImc}>Calcular</button>
        </form>
      </div>
      {mostrarresultado &&(
        //Envia o valor do resultado com 2 casas decimais via props para o componente resultado
        <Resultado resultado={resultado.toFixed(2)}/>
      )}
  

    </section>
  )
}

export default App
        
