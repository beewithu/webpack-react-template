import Text from 'components/Text';
import { FC, ReactElement } from 'react';

const App: FC = (): ReactElement => {
  return (
    <div>
      <Text variant="title" type="primary">
        Webpack 5 + React
      </Text>
      <Text variant="subtitle" type="secondary">(hot module reload incl.)</Text>
    </div>
  );
};

export default App;
