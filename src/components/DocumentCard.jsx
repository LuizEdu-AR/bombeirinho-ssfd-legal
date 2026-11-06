import { Link } from 'react-router-dom';

export function DocumentCard({ to, icon, title, description }) {
  return (
    <Link className="document-card" to={to}>
      <span className="card-icon" aria-hidden="true">{icon}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="card-action">Ler documento →</span>
    </Link>
  );
}
