import { styled } from 'custom-stitches';

const ComponentDemo = styled('main', {
  minHeight: '100vh',
  display: 'grid',
  gridTemplateAreas: `"component-demo controller"`,
  gridTemplateColumns: 'auto 330px',
  overflow: 'hidden',
  position: 'relative',
});

export default ComponentDemo;
