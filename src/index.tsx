import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
