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
    </Routes>
  );
};

export default AppRoutes;
