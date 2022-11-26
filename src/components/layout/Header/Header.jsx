import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header-navbar">
        <Link to="/">
          <img
            src="../logo192.png"
            alt="Logo da marca"
            className="header-logo"
          />
        </Link>
        <ul className="header-list">
          <li>
            <Link to="/" className="header-link">
              INÍCIO
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="header-link">
              SOBRE
            </Link>
          </li>
          <li>
            <Link to="/projetos" className="header-link">
              PROJETOS
            </Link>
          </li>
          <li>
            <Link to="/ficha-tecnica" className="header-link">
              FICHA TÉCNICA
            </Link>
          </li>
        </ul>
        <button className="btn-donation">DOE</button>
      </nav>
    </header>
  );
};

export default Header;
