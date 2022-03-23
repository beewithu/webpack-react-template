import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import models from './models';
import RootModel from './models/rootModel';

const store = init({
  redux: {
    devtoolOptions: {
      actionSanitizer: (action) => action,
      disabled: process.env.NODE_ENV === 'production',
    },
  },
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export default store;
