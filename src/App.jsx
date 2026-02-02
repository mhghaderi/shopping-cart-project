import React from "react";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
