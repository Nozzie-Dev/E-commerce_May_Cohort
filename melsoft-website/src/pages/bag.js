import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";
import SideBar from "../components/bagSideBar";


const Bag = () => {
  return (
    <div className="d-flex" style={{
      paddingLeft: '90px'}}>
        <div>
          <SideBar />
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
