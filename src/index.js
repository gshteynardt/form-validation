import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { App } from './App.js';
import { HashRouter as Router } from 'react-router-dom';

const app = (<Router>
  <App />
</Router>)

ReactDOM.render(
  <React.StrictMode>
    { app }
  </React.StrictMode>,
  document.getElementById('root')
);

