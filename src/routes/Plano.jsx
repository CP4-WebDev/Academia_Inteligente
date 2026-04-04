import '../css/hero.css'
import Treino from '../assets/imgs/treino.png'
import Atleta from  '../assets/imgs/Atleta.png'
import Luta from '../assets/imgs/Luta.png'

const Plano = () => {
  return (
    <div className="planos">
      <section className="hero hero--planos">
        <div className='hero-bg-lines' aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        <div className='hero-content'>
          <span className='hero-eyebrow'>Escolha o seu ritmo</span>
          <h1 className='hero-title'>
            Planos feitos para<br />
            <em>cada objetivo</em>.
          </h1>
          <p className='hero-subtitle'>
            Do iniciante ao atleta — temos o plano ideal<br />
            para sua jornada de transformação.
          </p>
          <div className='hero-actions'>
            <a href='#planos' className='btn btn--hero'>Ver preços</a>
          </div>
        </div>
      </section>

      <section className='galeria'>
        <div className='bloco'>
        <img src={Atleta} alt="atleta" className='img-galeria' />
        </div>
        <div className='bloco'>
        <img src={Treino} alt="Treino" className='img-galeria' />
        </div>
        <div className='bloco'>
        <img src={Luta} alt="Luta" className='img-galeria' />
        </div>
      </section>
      <section className="cardsplanos">
        <div className="cardplano">
          <h2>Básico</h2>
          <p className="preco">R$ 59/mês</p>
          <p>Acesso à academia</p>
          <p>Horário limitado</p>
          <button className="btn">Assinar</button>
        </div>
        <div className="cardplano destaque">
          <span className="badge">Mais popular!</span>
          <h2>Intermediário</h2>
          <p className="preco">R$ 89/mês</p>
          <p>Acesso total</p>
          <p>Treinos personalizados</p>
          <button className="btn">Assinar</button>
        </div>
        <div className="cardplano">
          <h2>Premium</h2>
          <p className="preco">R$ 129/mês</p>
          <p>Acesso 24h</p>
          <p>Personal trainer + IA</p>
          <button className="btn">Assinar</button>
        </div>
      </section>
    </div>
  );
};

export default Plano;