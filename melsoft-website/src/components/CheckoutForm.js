import React from 'react';
import './CheckoutForm.css';

import dellXPS13Img from '../assets/Name=Dell-XPS-13-White.png';
import iphone11NavyImg from '../assets/Name=Iphone-12-Pro-02.png';
import iphone11WhiteImg from '../assets/Name=Iphone-13-Pro-03.png';
import iphone11BlackImg from '../assets/Name=Iphone-13-Pro-02.png';

const CheckoutForm = ({ items, shipping, gst, giftCard, total }) => {
    return (
        <div className="container">
            <section className="order-summary">
                <div className="line-01">
                    <h1>Order Summary</h1>
                </div>
                <div className="line-02">
                    <span>Items:</span>
                    <span>{items}</span>
                </div>
                <div className="line-03">
                    <span>Shipping:</span>
                    <span>{shipping}</span>
                </div>
                <div className="line-04">
                    <span>Estimated GST:</span>
                    <span>{gst}</span>
                </div>
                <div className="line-05">
                    <span>Gift Card:</span>
                    <span>{giftCard}</span>
                </div>
                <hr className="divider" />
                <div className="total">
                    <span>Order Total:</span>
                    <span>{total}</span>
                </div>
                <hr className="divider" />
                <button type="submit" className="place-order-btn">Place your order</button>
            </section>
            
            <hr style = {{
                background: 'gray',
                color: 'gray',
                bordercolor: 'gray',
                height: '10px',
            }}
                />
            

            {/* Shipping Address Section */}
            <section className="address-card">
    <h1 className="subtitle-expanded">Shipping Address</h1>

    <p>John Maker</p>
    <p>123 Plae Grond Stret</p>
    <p>Vermont, California</p>
    <p>United States of America</p>
    <button className="change-address-btn">Change</button>
</section> 
 {/* Payment Method Section */}
 <section className="address-card">
 <h1 className="subtitle-expanded">Payment Method</h1>

                <p><i className="fas fa-credit-card"></i>Mastercard ending in 1252</p>
                <p><i className="fas fa-gift"></i>Gift Card Balance</p>
                <p>$ 53.21</p>
                <p><i className="fas fa-address-card"></i>Billing Address</p>
                <p>Billing address same as Shipping Address</p>
                <button className="change-address-btn">Change</button>
            </section>

             {/* Review Your Bag Section */}
             <section className="review-bag">
             <h1 className="subtitle-expanded">Review Your Bag</h1>
                <div className="items-grid">
                    <div className="item-card">
                    <img src={dellXPS13Img} alt="Dell XPS 13" className="item-image" />
                        <div className="item-details">
                            <h3>Dell XPS 13</h3>
                            <p>White</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                            <p>4.5 / 5</p>
                            <p>$ 1799.99</p>
                            <p>Quantity: 1</p>
                            <button className="item-btn">Remove</button>
                        </div>
                    </div>
                    <div className="item-card">
                    <img src={iphone11NavyImg} alt="iphone11NavyImg" className="item-image" />
                        <div className="item-details">
                            <h3>Iphone 11</h3>
                            <p>Navy Blue</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                            <p>4.5 / 5</p>
                            <p>$ 729.99</p>
                            <p>Quantity: 3</p>
                            <button className="item-btn">Remove</button>
                        </div>
                    </div>
                    <div className="item-card">
                    <img src={iphone11WhiteImg} alt="iphone11WWhiteImg" className="item-image" />
                        <div className="item-details">
                            <h3>Iphone 11</h3>
                            <p>Milky White</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                            <p>4.5 / 5</p>
                            <p>$ 619.99</p>
                            <p>Quantity: 1</p>
                            <button className="item-btn">Remove</button>
                        </div>
                    </div>
                    <div className="item-card">
                    <img src={iphone11BlackImg } alt="iphone11BlackImg " className="item-image" />
                        <div className="item-details">
                            <h3>Iphone 11</h3>
                            <p>Serious Black</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                            <p>4.5 / 5</p>
                            <p>$ 619.99</p>
                            <p>Quantity: 2</p>
                            <button className="item-btn">Remove</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    
        
    );
};

export default CheckoutForm;

