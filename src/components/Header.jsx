import { NavLink } from 'react-router-dom';

const links = [
  { to: '/termos-de-uso/', label: 'Termos de Uso' },
  { to: '/politica-de-privacidade/', label: 'Privacidade' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container navigation">
        <NavLink className="brand" to="/" aria-label="Bombeirinho SSFD — início">
          <span aria-hidden="true">🚒</span>
          <strong>BOMBEIRINHO</strong>
          <span className="brand-tag">SSFD</span>
        </NavLink>

        <nav className="navigation-links" aria-label="Documentos legais">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
