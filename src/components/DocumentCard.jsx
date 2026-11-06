import { Link } from 'react-router-dom';

export function DocumentCard({ to, symbol, title, description }) {
  return (
    <Link className="document-card" to={to}>
      <span className="card-icon" aria-hidden="true">
        {symbol === 'terms' ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
            <path d="M14 3v6h5M9 13h6M9 17h6" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        )}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="card-action">Ler documento →</span>
    </Link>
  );
}
