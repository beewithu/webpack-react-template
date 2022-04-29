import ComponentDemoLayout from 'layouts/ComponentDemo';
import MainLayout from 'layouts/Main';
import { FC, lazy, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const FeatureCard = lazy(() => import('./FeatureCard'));

const Pages: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div />}>
              <Home />
            </Suspense>
          }
        />
      </Route>
      <Route path="/components" element={<ComponentDemoLayout />}>
        <Route
          path="feature-card"
          element={
            <Suspense fallback={<div />}>
              <FeatureCard />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>404! There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default Pages;
