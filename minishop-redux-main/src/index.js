import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import minishopStore from './store/store'
import App from './App';
import './App.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={minishopStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
