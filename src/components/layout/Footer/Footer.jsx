import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footer-icons">
        <li>
          <a href="">
            <img src="facebook-logo.svg" alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="instagram-logo.svg" alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="whats-logo.svg" alt="Ícone do Facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="youtube-logo.svg" alt="Ícone do Facebook" />
          </a>
        </li>
      </ul>

      <p>&#169; 2022 Junta Salvador - Todos os direitos reservados</p>

      <nav>
        <ul className="footer-nav">
          <li>
          <a href="">Sobre nós</a> 
          </li>
          <li>
            <a href="">Perguntas Frequentes</a> 
          </li>
          <li>
          <a href="">Contato</a> 
          </li>
          <li>
          <a href="">Programa de Integridade</a> 
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
