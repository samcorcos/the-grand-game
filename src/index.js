import React from 'react';
import ReactDOM from 'react-dom';
import UniversalRouter from 'universal-router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  Dashboard,
  Players,
  Allocation,
} from './views'

const routes = [
  { path: '/', action: () => <Dashboard /> },
  { path: '/players', action: () => <Players /> },
  { path: '/allocation', action: () => <Allocation /> },
]

const router = new UniversalRouter(routes)

router.resolve({ pathname: window.location.pathname, }).then(component => {
  ReactDOM.render(component, document.getElementById('root'));
})
registerServiceWorker();
