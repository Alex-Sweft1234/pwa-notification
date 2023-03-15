import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './app';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { FirebaseRoot } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FirebaseRoot>
    <App />
  </FirebaseRoot>
);

serviceWorkerRegistration.register();
