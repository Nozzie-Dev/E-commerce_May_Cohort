import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";

const Bag = () => {
  return (
    <div className="d-flex">
      <div className="col-2 p-0 bg-light">
        {/**Replace with nav component */}
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            <i className="bi bi-house"></i>
          </a>
          <a className="nav-link" href="#">
            <i className="bi bi-cart"></i>
          </a>
          <a className="nav-link" href="#">
            <i className="bi bi-bag"></i>
          </a>
          <a className="nav-link" href="#">
            <i className="bi bi-box"></i>
          </a>
        </nav>
      </div>
      <div className="col-7">
        <CheckBag />
      </div>
      <div className="col-3">
        <BagSummary />
      </div>
    </div>
  );
};

export default Bag;
