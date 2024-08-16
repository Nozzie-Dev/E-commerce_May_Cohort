import React from 'react';
import icon from '../assets/Name=bag-add.png';
import '../App.css';

const Product = ({ image, name, description, price, onAddToCart }) => {
    return (
        <div className="product">
            <div className='images'>
                <img src={image} alt={name} className="product-image" />
            </div>
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
            <img src={icon} onClick={onAddToCart} className="add-to-cart-button" />
        </div>
    );
};

export default Product;
