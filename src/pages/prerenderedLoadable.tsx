import loadable from '@loadable/component';
import { PrerenderedComponent } from 'react-prerendered-component';
import { memo } from 'react';

const preRenderedLoadable = (dynamicImport: any) => {
  const LoadableComponent = loadable(dynamicImport);
  return memo((props) => (
    // you can use the `.preload()` method from react-loadable or react-imported-component`
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};

export default preRenderedLoadable;
