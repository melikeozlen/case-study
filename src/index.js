import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Provider } from 'react-redux'
import { store } from './store/store.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from './pages/ProductListPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import "./assets/styles/style.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/productDetail/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
            <h1>Not Found</h1>

            <a href="/">Go to Home</a>
          </div>} />
        </Routes>
      </App>
    </BrowserRouter>

  </Provider>
);
