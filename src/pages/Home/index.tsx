import Input from 'components/Input';
import Text from 'components/Text';
import { ChangeEvent, FC, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, RootState } from 'store';

const Home: FC = (): ReactElement => {
  const dispatch = useDispatch<Dispatch>();
  const webpackVersion = useSelector<RootState, string>((state) => state.app.webpackVersion);

  const onWebpackVersionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch.app.setWebpackVersion(event.target.value);
  };

  return (
    <div>
      <Text variant="title" type="primary">
        Webpack {webpackVersion} + React
      </Text>
      <Text variant="subtitle" type="secondary">
        (hot module reload incl.)
      </Text>
      <Input type="text" value={webpackVersion} onChange={onWebpackVersionChange} />
    </div>
  );
};

export default Home;
