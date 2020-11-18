/* eslint-disable prettier/prettier */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';

import './index.scss';

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,

  document.getElementById('app')
);

module.hot.accept();
