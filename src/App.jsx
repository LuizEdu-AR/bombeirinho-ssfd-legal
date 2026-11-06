import { SiteLayout } from './components/SiteLayout.jsx';
import { AppRoutes } from './routes/AppRoutes.jsx';

export default function App() {
  return (
    <SiteLayout>
      <AppRoutes />
    </SiteLayout>
  );
}
