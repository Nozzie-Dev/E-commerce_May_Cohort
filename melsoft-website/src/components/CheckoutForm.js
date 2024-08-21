import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutForm.css';
import { useNavigate } from 'react-router-dom';
import back from '../assets/Name=chevron-back.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQuantity } from "../Redux/cartSlice";
import icon from '../assets/Selected=True.png';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
    const navigate = useNavigate();

    const handleNewCard = () => {
        navigate('/payment');
    };

    const proceedToAddress = () => {
        navigate('/address');
    };
    // Access the cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Function to decrease quantity
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 }));
        }
    };

    // Function to increase quantity
    const increaseQuantity = (item) => {
        dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }));
    };

    // Calculate total order amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container">
            <section className="order-summary">
                <div className="line-01">
                    <h1>Order Summary</h1>
                </div>
                <div className="line-02">
                    <div>Items:</div>
                    <div className='redux-info'>${totalAmount.toFixed(2)}</div>
                </div>
                <div className="line-03">
                    <span>Shipping:</span>
                    <div className='redux-info'>$6.99</div>
                </div>
                <div className="line-04">
                    <span>Estimated GST:</span>
                    <div className='redux-info'>$760.41</div>
                </div>
                <div className="line-05">
                    <span>Gift Card:</span>
                    <div className='redux-info'>$0.00</div>
                </div>
                <hr className="divider" />
                <div className="total">
                    <span>Order Total:</span>
                    <div className='redux-info'>${(totalAmount + 6.99 + 760.41).toFixed(2)}</div>
                </div>
                <hr className="divider" />
                <button type="submit" className="place-order-btn">Place your order</button>

                <button type='button' onClick={() => navigate(-1)} className='backbutton'>
                    <img src={back} alt='back' />
                    Back
                </button>
            </section>

            {/* Shipping Address Section */}
            <section className="address-card">
                <h1 className="subtitle-expanded pb-5">Shipping Address</h1>
                <div className='row leads'>
                    <div className='col-10'>
                        <p>John Maker</p>
                        <p>123 Plae Grond Stret</p>
                        <p>Vermont, California</p>
                        <p>United States of America</p>
                    </div>

                    <div className='col-2'>

                        <button className="change-address-btn" onClick={proceedToAddress}>Change</button>

                    </div>

                </div>
            </section>

            {/* Payment Method Section */}
            <section className="address-card mt-3">
                <h1 className="subtitle-expanded pb-5">Payment Method</h1>
                <div className='row leads'>
                    <div className='col-10'>
                        <p><i className="fas fa-credit-card"></i> Mastercard
                            <span className='gift-card'> ending in 1252</span>
                        </p>
                        <p><i className="fas fa-gift"></i> $53.21
                            <span className='gift-card'> gift card balance</span>
                        </p>
                        <p><img src={icon} alt='icon' /> Billing address same as Shipping Address</p>
                    </div>
                    <div className='col-2'>
                        <button className="change-address-btn" onClick={handleNewCard}>Change</button>
                    </div>
                </div>
            </section>

            {/* Review Your Bag Section */}
            <section className="review-bag mt-5">
                <h1 className="subtitle-expanded pb-5">Review Your Bag</h1>
                {cartItems.length === 0 ? (
                    <p>Your bag is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="items-grid" key={index}>
                            <div className="item-card">
                                <div className='row'>
                                    <div className='col'>
                                        <img src={item.image} alt={item.name} className="item-image" />
                                    </div>
                                    <div className='col'>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <span className='color-text'>{item.description}</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                            <div className='text-success'>
                                                <Rate defaultValue={4.5} allowHalf style={{ color: "green" }} />
                                                4.5 / 5
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="card-text mb-0">
                                                    ${item.price} x <span>{item.quantity}</span>
                                                </p>
                                                <div className="d-flex align-items-center">
                                                    <button
                                                        className="btn btn-outline-danger border-0 me-2"
                                                        onClick={() => decreaseQuantity(item)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button
                                                        className="btn btn-outline-success border-0 ms-2"
                                                        onClick={() => increaseQuantity(item)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default CheckoutForm;
