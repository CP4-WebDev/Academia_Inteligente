import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/imc">IMC</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        
      </nav>
    </header>
  );
};

export default Header;