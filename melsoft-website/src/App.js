import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Bag from "./pages/bag";
import ProductList from "./pages/ProductList";
import Itemview from "./pages/Itemview";
import Checkout from "./components/CheckoutForm";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App home-page">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/Itemview" element={<Itemview />} />
          <Route path="/Checkoutform" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
