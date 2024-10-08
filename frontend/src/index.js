import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import {BrowserRouter} from "react-router-dom"
// import StoreContextProvider from './context/StoreContext';
import StoreContextProvider from './context/storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StoreContextProvider>
       <App />
    </StoreContextProvider>
  </BrowserRouter>
);

// ReactDOM.render(
//   <StoreContextProvider>
//     <BrowserRouter>
//         <App/>
//       </BrowserRouter>
//   </StoreContextProvider>
// , document.getElementById("root"))
