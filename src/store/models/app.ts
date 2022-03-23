import { createModel } from '@rematch/core';
import RootModel from './rootModel';

type State = {
  webpackVersion: string;
};

const initialState: State = {
  webpackVersion: '5',
};

const app = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setWebpackVersion(state, payload: string) {
      return {
        ...state,
        webpackVersion: payload,
      };
    },
  },
});

export default app;
