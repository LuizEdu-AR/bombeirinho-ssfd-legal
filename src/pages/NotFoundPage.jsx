import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container not-found">
      <p className="eyebrow">ERRO 404</p>
      <h1>Página não encontrada.</h1>
      <p className="lead">O endereço solicitado não existe neste site.</p>
      <Link className="back-link" to="/">Voltar ao início →</Link>
    </div>
  );
}
