import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { globalStyles } from './custom-stitches';
import store from './store';

const HotModuleApp = hot(App);

globalStyles();

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <HotModuleApp />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
    rootElement,
  );
} else {
  render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <HotModuleApp />
        </BrowserRouter>
      </Provider>
    </StrictMode>,
    rootElement,
  );
}
