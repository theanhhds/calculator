import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Add this in node_modules/react-dom/index.js
window.React1 = require('react');

const myApp = <App />;

ReactDOM.render(
    myApp,
  document.getElementById('root')
);
