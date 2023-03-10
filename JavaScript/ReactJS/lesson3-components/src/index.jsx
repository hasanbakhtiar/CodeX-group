import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';

import './assets/sass/style.scss';
import App from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

