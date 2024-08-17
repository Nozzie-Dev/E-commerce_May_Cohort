import React, { useState } from "react";
import dellxps from "../assets/Name=Dell-XPS-13-White.png";

const CheckBag = () => {
  // Initialize state for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container p-4">
      <h3>Check your Bag Items</h3>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={dellxps}
              className="img-fluid rounded-start"
              alt="Dell XPS 13"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Dell XPS 13</h5>
              <p className="card-text text-muted">White</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  ★★★★★ <span>4.5/5</span>
                </small>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <p className="card-text mb-0">
                  $1799.99 x <span>{quantity}</span>
                </p>
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-outline-danger border-0 me-2" 
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button 
                    className="btn btn-outline-success border-0 ms-2" 
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckBag;
