import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SpinerAnimation from './components/SpinerAnimation'
import { UserProvider } from './context/context'
const LazyApp = lazy(() => import('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<SpinerAnimation />}>
      <UserProvider>
        <LazyApp />
      </UserProvider>
    </Suspense>
  </React.StrictMode >
);


