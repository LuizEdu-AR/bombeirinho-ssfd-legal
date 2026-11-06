import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
