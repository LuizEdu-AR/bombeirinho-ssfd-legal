
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          Bombeirinho SSFD · Desenvolvedor: Luiz Eduardo de Almeida Rodrigues ·{' '}
          <a href="mailto:luizedu.btiufersa@gmail.com">
            luizedu.btiufersa@gmail.com
          </a>
        </p>

        <div className="footer-links">
          <Link to="/">
            Início
          </Link>

          <Link to="/termos-de-uso/">
            Termos
          </Link>

          <Link to="/politica-de-privacidade/">
            Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
