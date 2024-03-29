import React from 'react';
import ReactDOM from 'react-dom/client';
import 'aos/dist/aos.css';
import './assets/bootstrap.min.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

