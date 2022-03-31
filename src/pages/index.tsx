import { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import preRenderedLoadable from 'pages/prerenderedLoadable';

const Home = preRenderedLoadable(() => import('./Home'));
const FeatureCard = preRenderedLoadable(() => import('./FeatureCard'));

const AppRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="components/feature-card"
        element={
          <Suspense fallback={<div />}>
            <FeatureCard />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
