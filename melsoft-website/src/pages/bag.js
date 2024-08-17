import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";


const Bag = () => {
  return (
    <div className="d-flex" style={{
      paddingLeft: '90px'}}>
      <div className="col-9">
        <CheckBag />
      </div>
      <div className="col-3">
        <BagSummary />
      </div>
    </div>
  );
};

export default Bag;
