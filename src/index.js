import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Certifique-se de que este arquivo inclui as importações do Tailwind
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
