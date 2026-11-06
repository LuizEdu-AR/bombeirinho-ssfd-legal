import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          {site.name} · Desenvolvedor: {site.developer} ·{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="footer-links">
          <Link to="/">Início</Link>
          <Link to="/termos-de-uso/">Termos</Link>
          <Link to="/politica-de-privacidade/">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
