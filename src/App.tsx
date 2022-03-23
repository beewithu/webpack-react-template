import AppRoutes from 'pages';
import { ChangeEvent, FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from 'store';

const App: FC = (): ReactElement => {
  const dispatch = useDispatch<Dispatch>();
  const webpackVersion = useSelector<RootState, string>((state) => state.app.webpackVersion);

  const onWebpackVersionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch.app.setWebpackVersion(event.target.value);
  };

  return <AppRoutes />;
};

export default App;
