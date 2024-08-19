import React from 'react';
import icon from '../assets/Name=bag-add.png';
import '../App.css';
import { Link } from 'react-router-dom';

const Product = ({ image, name, description, price, onAddToCart }) => {
    return (
        <div className="product">
            <Link to={'/Itemview'} style={{ textDecoration: 'none' }}>
                <div className='images'>
                    <img src={image} alt={name} className="product-image" />
                </div>
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <p className="product-price">${price.toFixed(2)}</p>
                <img src={icon} onClick={onAddToCart} className="add-to-cart-button" />
            </Link>
        </div>
    );
};

export default Product;
