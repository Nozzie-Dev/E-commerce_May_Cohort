import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Bag from "./pages/bag";
import ProductList from "./pages/ProductList";
import Itemview from "./pages/Itemview";
import Checkout from "./components/CheckoutForm";
import AddNewPayment from './pages/Payment';
import AddressPage from "./pages/AddressPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App home-page">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/itemview" element={<Itemview />} />
          <Route path="/checkoutform" element={<Checkout />} />
          <Route path="/payment" element={<AddNewPayment />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
