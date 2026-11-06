export function Notice({ title, children }) {
  return (
    <aside className="notice" role="note">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}
