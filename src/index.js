import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UsersPage } from './components/users/UsersPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersPage />
  </React.StrictMode>
);
