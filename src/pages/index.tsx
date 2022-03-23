import { FC, lazy, ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));

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
    </Routes>
  );
};

export default AppRoutes;
