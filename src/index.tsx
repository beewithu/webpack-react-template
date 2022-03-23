import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { globalStyles } from './custom-stitches';
import App from './App';

const HotModuleApp = hot(App);

globalStyles();

render(<HotModuleApp />, document.getElementById('root'));
