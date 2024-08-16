import React from "react";
import dellxps from "../assets/Name=Dell-XPS-13-White.png";

const checkBag = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  ★★★★★ <span>4.5/5 </span>
                </small>
              </p>
              <div className="d-flex align-items-center">
                <p className="card-text">$1799.99 x 1</p>
                <button className="btn btn-outline-danger me-2">-</button>
                <span>1</span>
                <button className="btn btn-outline-success ms-2">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkBag;
