import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyles } from './global/globalStyles';
import App from './App';
import 'animate.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
