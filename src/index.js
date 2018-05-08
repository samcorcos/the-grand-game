import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router'
import './index.css';
import App from './App';
import Players from './Players'
import registerServiceWorker from './registerServiceWorker';

const routes = [
  { path: '/', action: () => <App /> },
  { path: '/players', action: () => <Players /> },
  { path: '/two', action: () => <h1>Page Two</h1> },
]

const router = new UniversalRouter(routes)

router.resolve({ pathname: window.location.pathname, }).then(component => {
  ReactDOM.render(component, document.getElementById('root'));
})
registerServiceWorker();
