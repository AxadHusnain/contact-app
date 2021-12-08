import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {store} from './state/store';
import App from './components/App';
import {
  BrowserRouter as Router, 
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>

   <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

 