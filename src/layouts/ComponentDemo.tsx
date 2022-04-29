import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'stitches';

const ComponentDemo = styled('main', {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateAreas: `"component-demo controller"`,
  gridTemplateColumns: 'auto 330px',
  overflow: 'hidden',
  position: 'relative',
});

const ComponentDemoLayout: FC = (): ReactElement => {
  return (
    <ComponentDemo>
      <Outlet />
    </ComponentDemo>
  );
};

export default ComponentDemoLayout;
