import { StrictMode } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { globalStyles } from './stitches';
import store from './store';

const HotModuleApp = hot(App);

globalStyles();

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HotModuleApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
