import '../css/estilo.css'
import '../css/global.css'
import '../css/hero.css'
import Imagem from '../assets/imgs/academia.png'

const Home = () => {
  return (
    <div className='home'>
      <section className='hero hero--home'>
        <div className='hero-bg-lines' aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className='hero-content'>
          <span className='hero-eyebrow'>Tecnologia + Performance</span>
          <h1 className='hero-title'>
            Treine com inteligência,<br />
            evolua de verdade.
          </h1>
          <p className='hero-subtitle'>
            A academia que usa IA para personalizar cada treino,<br />
            acompanhar sua evolução e maximizar seus resultados.
          </p>
          <div className='hero-actions'>
            <button className='btn btn--hero'>Começar agora</button>
            <a href='/planos' className='btn btn--outline'>Ver planos</a>
          </div>
        </div>
        <div className='hero-stat-strip'>
          <div className='hero-stat'><strong>+2.400</strong><span>alunos ativos</span></div>
          <div className='hero-stat'><strong>98%</strong><span>satisfação</span></div>
          <div className='hero-stat'><strong>24h</strong><span>acesso premium</span></div>
        </div>
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
    </div>
  )
}

export default Home