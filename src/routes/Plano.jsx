const Plano = () => {
  return (
    <div className="planos">
      <section className="hero">
        <h2>Planos</h2>
        <p>Confira nossos planos e preços!</p>
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