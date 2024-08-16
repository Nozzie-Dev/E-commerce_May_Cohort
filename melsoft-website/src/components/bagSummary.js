import React from "react";
import dellxps from "../assets/Name=Dell-XPS-13-White.png";

const bagSummary = () => {
  return (
    <div className="p-4 bg-light rounded">
      <h5>Bag</h5>
      <div className="d-flex flex-column">
        <img src={dellxps} className="img-thumbnail mb-2" alt="" />
        <img src={dellxps} className="img-thumbnail mb-2" alt="" />
      </div>
      <hr />
      <p className="d-flex justify-content-between">
        <span>Bag Total:</span>
        <span>$5849.93</span>
      </p>
      <button className="btn btn-dark w-100">Checkout</button>
    </div>
  );
};

export default bagSummary;
