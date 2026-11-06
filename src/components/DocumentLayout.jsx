import { useEffect } from 'react';
import { Notice } from './Notice.jsx';
import { legalNotice, site } from '../data/site.js';

export function DocumentLayout({ title, accent, subtitle, notice, children }) {
  useEffect(() => {
    document.title = `${title} — ${site.name}`;
  }, [title]);

  return (
    <article className="container legal-document">
      <p className="eyebrow">DOCUMENTOS LEGAIS</p>
      <h1>{title} <em>{accent}</em></h1>
      <p className="lead">{subtitle}</p>

      <Notice title={legalNotice.title}>
        {notice || legalNotice.description}
      </Notice>

      {children}

      <p className="document-version">
        Versão inicial: {site.revisionDate} · Revisar antes de publicar.
      </p>
    </article>
  );
}
