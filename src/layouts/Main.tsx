import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'stitches';

const Main = styled('main', {
  minHeight: '100vh',
});

const MainLayout: FC = (): ReactElement => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default MainLayout;
