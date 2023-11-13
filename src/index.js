// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assurez-vous que ce fichier existe ou le supprimez s'il n'est pas nécessaire
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajoutez cette ligne

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
