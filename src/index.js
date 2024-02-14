import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contador from './component/usestate/agregar_estado _a _un_componente/Contador';
import reportWebVitals from './reportWebVitals';
import CampoTexto from './component/usestate/agregar_estado _a _un_componente/CampoTexto';
import Checkbox from './component/usestate/agregar_estado _a _un_componente/Checkbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador />
    <CampoTexto />
    <Checkbox />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
