import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

// Load main styles that are defined in assets folder
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
