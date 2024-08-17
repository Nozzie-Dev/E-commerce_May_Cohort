import React from "react";
import dellxps from "../assets/Name=Dell-XPS-13-White.png";
import bag from "../assets/Name=bag-handle.png";
import Iphone12 from '../assets/Name=Iphone-12-Pro-02.png';
import Iphone4 from '../assets/Name=Iphone-12-04.png';
import Iphone1 from '../assets/Name=Iphone-12-01.png';

const BagSummary = () => {
  return (
    <div className="p-3 align-items-center mt-5" style={{
      width: '100%',
      maxWidth: '345px',
      height: 'auto',
      padding: '7px 8px 8px 8px',
      borderLeft: '2px solid gray',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      <h5 className="mb-4" style={{ marginBottom: '112px', fontSize: '30px' }}>Bag</h5>
      <div className="container">
        <div className="row">
        <div className="col-6 col-sm-4 mb-3">
            <img src={dellxps} className="img-thumbnail" alt="" style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
          </div>
          <div className="col-6 col-sm-4 mb-3">
            <img src={Iphone12} className="img-thumbnail" alt="" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
          <div className="col-6 col-sm-4 mb-3">
            <img src={Iphone4} className="img-thumbnail" alt="" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
          <div className="col-6 col-sm-4 mb-3">
            <img src={Iphone1} className="img-thumbnail" alt="" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-between">
        <span>Bag Total:</span>
        <span>$5849.93</span>
      </p>
      <button className="btn btn-dark d-flex align-items-center" style={{
        width: '100%',
        maxWidth: '139px',
        height: '40px',
        padding: '8px 24px',
        borderRadius: '14px',
        gap: '8px'
      }}>
        <img src={bag} alt="Cart" style={{ width: '20px', height: '20px' }} /> Checkout
      </button>
    </div>
  );
};

export default BagSummary;
