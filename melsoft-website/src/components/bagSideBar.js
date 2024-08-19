import React, { useState } from 'react';
import '../App.css';
import menu from "../assets/Name=menu.png"
import storefront from "../assets/Name=storefront.png"
import logo from "../assets/Type=Transparent.png"
import bag from "../assets/Name=bag-handle.png"
import logout from "../assets/Name=log-out.png"
import Store from '../assets/Nav-Link.png';
import Close from '../assets/Name=close.png';
import { Link } from 'react-router-dom';

const BagSideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : 'closed'} col-2 p-0 bg-light d-flex flex-column justify-content-between sidebar`}
      style={{
        width: isOpen ? '130px' : '72px',
        height: '100%',
        top: '16px',
        left: '16px',
        padding: '8px',
        borderRadius: '8px',
        transition: 'width 0.3s ease',
      }}>
      <nav className="nav flex-column">
        <a className="nav-link " href="#">
          <img src={logo} alt="Logo" style={{ width: '20px', height: '20px' }} />
        </a>
        <a className="nav-link" href="#" onClick={toggleSidebar}>
          <img
            src={isOpen ? Close : menu}
            alt={isOpen ? "Close" : "Menu"}
            style={{ width: '20px', height: '20px' }}
          />
        </a>
        <Link className="nav-link" to="/">
          <img
            src={isOpen ? Store : storefront}
            alt={isOpen ? "Store" : "Storefront"}
            style={{
              width: isOpen ? '90px' : '20px',
              height: isOpen ? '40px' : '20px',
              transition: 'width 0.3s ease, height 0.3s ease'
            }}
          />
        </Link>
        <Link className="nav-link" to="/bag">
          <img src={bag} alt="Bag" style={{ width: '20px', height: '20px' }} />
          {isOpen && <span className="ml-2" style={{ color: 'black', fontSize: '20px' }}
          >Bag</span>}
        </Link>
      </nav>
      <a href="#" className="d-flex justify-content-center mb-3">
        <img src={logout} alt="Logout" style={{ width: '20px', height: '20px' }} />
        {isOpen}
      </a>
    </div>
  );
};


export default BagSideBar;
