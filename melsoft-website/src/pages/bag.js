import React from "react";
import CheckBag from "../components/checkBag";
import BagSummary from "../components/bagSummary";
import Sidebar from '../components/bagSideBar';

const Bag = () => {
  return (
    <div className="d-flex" style={{
      backgroundColor: '#EDEDED',
      minHeight: '100vh'
    }}>
      <div>
        <Sidebar />
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
