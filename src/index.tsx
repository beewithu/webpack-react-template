import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { globalStyles } from './custom-stitches';
import store from './store';

const HotModuleApp = hot(App);

globalStyles();

const app = (
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <HotModuleApp />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
