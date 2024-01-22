import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';
import { store } from './store';
import slider from "../src/public/css/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
