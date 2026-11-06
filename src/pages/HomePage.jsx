import { useEffect } from 'react';
import { DocumentCard } from '../components/DocumentCard.jsx';
import { Notice } from '../components/Notice.jsx';
import { legalNotice, site } from '../data/site.js';

export function HomePage() {
  useEffect(() => {
    document.title = `${site.name} — Documentos legais`;
  }, []);

  return (
    <div className="container home-page">
      <p className="eyebrow">SOUTH STATE FIRE DEPARTMENT</p>
      <h1>Transparência e <em>responsabilidade.</em></h1>
      <p className="lead">
        Consulte as regras de utilização e as informações sobre o tratamento
        de dados pelo bot Bombeirinho SSFD.
      </p>

      <div className="document-grid">
        <DocumentCard
          to="/termos-de-uso/"
          symbol="terms"
          title="Termos de Uso"
          description="Regras, responsabilidades e condições de utilização."
        />
        <DocumentCard
          to="/politica-de-privacidade/"
          symbol="privacy"
          title="Política de Privacidade"
          description="Dados tratados, finalidades, segurança e direitos dos usuários."
        />
      </div>
    </div>
  );
}
