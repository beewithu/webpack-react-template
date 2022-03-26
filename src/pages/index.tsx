import { FC, lazy, ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const FeatureCard = lazy(() => import('./FeatureCard'));

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
