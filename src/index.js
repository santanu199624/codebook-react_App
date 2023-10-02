import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/Other/ScrollToTop';
import {FilterProvider} from './context/filterContext';
import {CartProvider} from "./context/CartContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ScrollToTop />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);


