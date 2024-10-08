import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';
import '../Itemview.css';
import IconOnly from "../assets/Type=Icon Only.png";
import ProductImage from "../assets/Product-Image.png";
import { Rate } from "antd";
import icon from '../assets/Name=bag-add.png';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import back from '../assets/Name=chevron-back.png';
import BagSummary from '../components/bagSummary';
import SideBar from '../components/bagSideBar';

const ProductPage = () => {
    const [selectedSize, setSelectedSize] = useState('S');
    const [selectedPrice, setSelectedPrice] = useState(10);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSizeChange = (e) => {
        const size = e.target.value;
        setSelectedSize(size);
        if (size === 'S') {
            setSelectedPrice(10);
        } else if (size === 'M') {
            setSelectedPrice(15);
        } else if (size === 'L') {
            setSelectedPrice(20);
        }
    };

    const handleAddToCart = () => {
        const product = {
            id: 1, // Unique identifier for the product
            name: 'Apple Watch Series 5 SE',
            size: selectedSize,
            price: selectedPrice,
            image: ProductImage, // Add appropriate product image
            description: 'High-quality smartwatch with various features.',
        };
        dispatch(addItemToCart(product));
    };

    return (
        <div className="product-page-container">
            <SideBar />
            <div className="main-content">
                <button type='button' onClick={() => navigate(-1)} className='back-button'>
                    <img src={back} alt='back' />
                    Back
                </button>
                <div className="product-page">
                    <div className="product-image-container">
                        <div className='product-image-cont'>
                            <img src={IconOnly} alt="Product" />
                            <img src={IconOnly} alt="Product" />
                            <img src={IconOnly} alt="Product" />
                        </div>
                        <img src={ProductImage} width="400" height="300" alt="Product" />
                    </div>
                    <div className='flex flex-col gap-4 lg:w-2/4'>
                        <div>
                            <h1 className='text-3xl font-bold'>Apple Watch</h1>
                            <span className='text-secondary font-bold'>Series 5 SE</span>
                            <div className='text-success'>
                                <Rate defaultValue={4.5} allowHalf style={{ color: "green" }} />
                                4.5/5
                            </div>
                        </div>
                        <h6 className='text-4xl font-semibold'>$ 529.99</h6>
                        <p className='text-gray-700'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                        <div>
                            <label>Select Size:</label>
                            <select value={selectedSize} onChange={handleSizeChange}>
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                style={{ color: 'White', backgroundColor: 'black', borderRadius: '12px' }}
                                onClick={handleAddToCart}
                            >
                                <img src={icon} alt='' />Add to Bag
                            </button>
                        </div>
                    </div>
                </div>
                <div className="aboutBottom">
                    <hr
                        style={{
                            background: "black",
                            color: "black",
                            borderColor: "black",
                            height: "3px",
                        }} />
                    <h1 className='text-3xl font-bold'> Description</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                        error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                        officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum.
                        Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                        cumque velit
                    </p>
                </div>
            </div>
            <div className="bag-summary">
                <BagSummary />
            </div>
        </div>
    );
};

export default ProductPage;
