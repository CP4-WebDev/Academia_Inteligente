import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">

        <Link to="/" className="header-logo">
          <i className="bi bi-lightning-charge-fill"></i>
          <span>Academia <em>Inteligente</em></span>
        </Link>

        <nav className="header-nav">
          <Link to="/"><i className="bi bi-house"></i> Home</Link>
          <Link to="/planos"><i className="bi bi-card-list"></i> Planos</Link>
          <Link to="/imc"><i className="bi bi-activity"></i> IMC</Link>
          <Link to="/sobre"><i className="bi bi-info-circle"></i> Sobre</Link>
          <Link to="/contato"><i className="bi bi-envelope"></i> Contato</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;