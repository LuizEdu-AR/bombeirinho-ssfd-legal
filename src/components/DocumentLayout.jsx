import { useEffect } from 'react';

export function DocumentLayout({
  title,
  accent,
  subtitle,
  children,
}) {
  useEffect(() => {
    document.title = `${title} — Bombeirinho SSFD`;
  }, [title]);

  return (
    <article className="container legal-document">
      <p className="eyebrow">
        DOCUMENTOS LEGAIS
      </p>

      <h1>
        {title} <em>{accent}</em>
      </h1>

      <p className="lead">
        {subtitle}
      </p>

      {children}
    </article>
  );
}
