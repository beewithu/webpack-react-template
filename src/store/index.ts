import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import models from './models';
import RootModel from './models/rootModel';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
    snapSaveState: () => void;
  }
}
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = init({
  redux: {
    initialState: preloadedState,
    devtoolOptions: {
      actionSanitizer: (action) => action,
      disabled: process.env.NODE_ENV === 'production',
    },
  },
  models,
});

window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
export default store;
