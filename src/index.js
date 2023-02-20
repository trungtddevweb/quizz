import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SpinerAnimation from './components/SpinerAnimation'
const LazyApp = lazy(() => import('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<SpinerAnimation />}>
      <LazyApp />
    </Suspense>
  </React.StrictMode>
);


