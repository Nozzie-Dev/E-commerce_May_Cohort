import React from "react";
import { useSelector } from "react-redux";
import bag from "../assets/Name=bag-handle.png";

const BagSummary = () => {
  // Get items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total price 
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className="p-3 align-items-center mt-5"
      style={{
        width: "100%",
        maxWidth: "345px",
        height: "auto",
        padding: "7px 8px 8px 8px",
        borderLeft: "2px solid gray",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h5 className="mb-4" style={{ marginBottom: "112px", fontSize: "30px" }}>
        Bag
      </h5>
      <div className="container">
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-6 col-sm-4 mb-3">
              <img
                src={item.image}
                className="img-thumbnail"
                alt={item.name}
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="d-flex justify-content-between">
        <span>Bag Total:</span>
        <span>${totalAmount.toFixed(2)}</span> {/* Display total amount */}
      </p>
      <button
        className="btn btn-dark d-flex align-items-center"
        style={{
          width: "100%",
          maxWidth: "139px",
          height: "40px",
          padding: "8px 24px",
          borderRadius: "14px",
          gap: "8px",
        }}
      >
        <img src={bag} alt="Cart" style={{ width: "20px", height: "20px" }} /> Checkout
      </button>
    </div>
  );
};

export default BagSummary;
