import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ShopContexProvider from './Contex/ShopContex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContexProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShopContexProvider>
  
);


