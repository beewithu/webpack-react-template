import { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import preRenderedLoadable from 'pages/prerenderedLoadable';
import { Helmet } from 'react-helmet-async';

const Home = preRenderedLoadable(() => import('./Home'));
const FeatureCard = preRenderedLoadable(() => import('./FeatureCard'));

const AppRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div />}>
            <Helmet>
              <title>Sandbox's Feature</title>
            </Helmet>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="components/feature-card"
        element={
          <Suspense fallback={<div />}>
            <Helmet>
              <title>Feature Card - Sandbox</title>
            </Helmet>
            <FeatureCard />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <Helmet>
              <title>404! Not found!</title>
            </Helmet>
            <p>404! There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
