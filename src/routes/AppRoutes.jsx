import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage.jsx';
import { TermsPage } from '../pages/TermsPage.jsx';
import { PrivacyPage } from '../pages/PrivacyPage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termos-de-uso/*" element={<TermsPage />} />
      <Route path="/politica-de-privacidade/*" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
