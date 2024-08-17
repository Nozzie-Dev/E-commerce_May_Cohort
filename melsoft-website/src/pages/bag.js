import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";
import SideBar from "../components/bagSideBar";

const Bag = () => {
  return (
    <div className="d-flex">
      <SideBar/>
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
