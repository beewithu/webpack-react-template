import { Models } from '@rematch/core';
import app from './app';

interface RootModel extends Models<RootModel> {
  app: typeof app;
}

export default RootModel;
