import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';

const HotModuleApp = hot(App);

render(<HotModuleApp />, document.getElementById('root'));
