import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import BagSideBar from "./components/bagSideBar";
import Bag from "./pages/bag";
import ProductList from "./pages/ProductList";
import Itemview from "./pages/Itemview";

function App() {
  return (
    <Router>
      <div className="App">
        <BagSideBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/Itemview" element={<Itemview />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
