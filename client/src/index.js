
import ReactDOM from 'react-dom';
import { makeRoutes } from './routes';

// grab routes and render
const routes = makeRoutes();

ReactDOM.render(routes, document.getElementById('root'));
