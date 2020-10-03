import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js';
import App from './App';
import ContextState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

ReactDOM.render(
  <AuthState>
    <ContextState>
      <AlertState>
        <App />
      </AlertState>
    </ContextState>
  </AuthState>,

  document.getElementById('root')
);
