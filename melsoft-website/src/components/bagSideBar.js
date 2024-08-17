import React from "react";
import menu from "../assets/Name=menu.png"
import storefront from "../assets/Name=storefront.png"
import logo from "../assets/Type=Transparent.png"
import bag from "../assets/Name=bag-handle.png"
import logout from "../assets/Name=log-out.png"

const bagSideBar = () => {
  return (
    <div className="col-2 p-0 bg-light d-flex flex-column justify-content-between" style={{ 
        width: '72px', 
        height: '992px', 
        top: '16px', 
        left: '16px', 
        padding: '8px', 
        borderRadius: '8px', 
        position: 'relative' 
      }}>
        <nav className="nav flex-column">
          <a className="nav-link active" href="#">
            <img src={logo} alt="Logo" style={{ width: '20px', height: '20px' }} />
          </a>
          <a className="nav-link" href="#">
            <img src={menu} alt="Menu" style={{ width: '20px', height: '20px' }} />
          </a>
          <a className="nav-link" href="#">
            <img src={storefront} alt="Storefront" style={{ width: '20px', height: '20px' }} />
          </a>
          <a className="nav-link" href="#">
            <img src={bag} alt="Bag" style={{ width: '20px', height: '20px' }} />
          </a>
        </nav>
        <a href="#" className="d-flex justify-content-center mb-3">
          <img src={logout} alt="Logout" style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
      

  );
};

export default bagSideBar;
