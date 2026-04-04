import '../css/sobre.css'

const Sobre = () => {
  return (
    <div className="sobre">

      {/* HERO */}
      <section className="sobre-hero">
        <h1>Sobre Nós</h1>
        <p>
          Nascemos para transformar a forma como você treina. Unimos tecnologia,
          ciência e dedicação para levar você ao seu melhor desempenho.
        </p>
      </section>

      {/* HISTÓRIA */}
      <section className="sobre-historia">
        <div className="sobre-historia-texto">
          <h2>Nossa História</h2>
          <p>
            Fundada em 2020, a Academia Inteligente surgiu da visão de que
            tecnologia e saúde deveriam caminhar juntas. Começamos pequenos,
            com uma ideia grande: tornar o treino de alta performance acessível
            para todos.
          </p>
          <p>
            Hoje contamos com equipamentos de ponta, instrutores certificados e
            um sistema de IA que personaliza cada treino de acordo com o seu
            perfil e objetivos.
          </p>
          <div className="sobre-historia-stats">
            <div className="stat">
              <strong>+5k</strong>
              <span>Alunos ativos</span>
            </div>
            <div className="stat">
              <strong>15+</strong>
              <span>Instrutores</span>
            </div>
            <div className="stat">
              <strong>6</strong>
              <span>Anos de história</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section className="sobre-mvv">
        <h2>Nossos Pilares</h2>
        <div className="mvv-cards">
          <div className="mvv-card">
            <i className="bi bi-bullseye"></i>
            <h3>Missão</h3>
            <p>Democratizar o acesso ao treino de alta performance com tecnologia acessível para todos.</p>
          </div>
          <div className="mvv-card">
            <i className="bi bi-eye"></i>
            <h3>Visão</h3>
            <p>Ser a academia referência em inovação e resultados no Brasil até 2030.</p>
          </div>
          <div className="mvv-card">
            <i className="bi bi-heart-pulse"></i>
            <h3>Valores</h3>
            <p>Comprometimento, ciência, respeito e evolução contínua em cada treino.</p>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="sobre-equipe">
        <h2>Nossa Equipe</h2>
        <div className="equipe-cards">
          <div className="equipe-card">
            <div className="equipe-avatar">
              <i className="bi bi-person-fill"></i>
            </div>
            <h4>Carlos Silva</h4>
            <span>Personal Trainer</span>
          </div>
          <div className="equipe-card">
            <div className="equipe-avatar">
              <i className="bi bi-person-fill"></i>
            </div>
            <h4>Ana Souza</h4>
            <span>Nutricionista</span>
          </div>
          <div className="equipe-card">
            <div className="equipe-avatar">
              <i className="bi bi-person-fill"></i>
            </div>
            <h4>Pedro Costa</h4>
            <span>Coach de Performance</span>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Sobre