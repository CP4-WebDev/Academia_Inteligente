<<<<<<< HEAD
import '../css/estilo.css'
import '../css/global.css'
import Imagem from '../assets/imgs/academia.png'

const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
      <h2>Bem-vindo à Nossa Academia</h2>
      <p>Descubra o melhor em treinamento e saúde!</p>
      <button className='btn'>Começar agora</button>
      </section>
      <section className='imagemsection'>
      <img src={Imagem} alt="Academia inteligente" className='img'/>
      </section>
      <section className='cards'>
        <div className='card'>
          <h2>Treinos Inteligentes</h2>
          <p>IA que adapta seu treino automaticamente</p>
        </div>
        <div className='card'>
          <h2>Acompanhamento</h2>
          <p>Veja sua evolução em tempo real</p>
        </div>
        <div className='card'>
          <h2>Alta Performace</h2>
          <p>Equipamentos modernos e tecnologia avançada</p>
        </div>
      </section>
=======
const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à Nossa Academia</h2>
      <p>Descubra o melhor em treinamento e saúde!</p>
>>>>>>> 5f66a5640e781cc920e4f0e640d92ea22c573a48
    </div>
  )
}

export default Home