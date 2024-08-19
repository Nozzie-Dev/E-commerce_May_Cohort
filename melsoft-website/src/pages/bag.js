import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";

const Bag = () => {
  return (
    <div className="d-flex" style={{
      paddingLeft: '90px',
      backgroundColor: '#EDEDED',
      minHeight: '100vh'}}>
        <div>
          </div>
      <div className="col-9">
        <CheckBag />
      </div>
      <div>
        <BagSummary />
      </div>
    </div>
  );
};

export default Bag;
