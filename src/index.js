import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>,
    document.getElementById('root')
  );
  
  registerServiceWorker();