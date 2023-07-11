import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header/Header";
import ProductsPage from "./components/Products/ProductsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

import { AuthProvider } from "./context/AuthContext";
import { useState } from "react";
import { CartProvider } from "./context/CartItems";

export default function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>

                }
              />
              <Route path="/" element={<ProductsPage />} />
            </Routes>
          </CartProvider>

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>

        </AuthProvider>
      </Router>
    </div>
  );
}
