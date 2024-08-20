import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CheckoutForm.css';
import { useNavigate } from 'react-router-dom';
import back from '../assets/Name=chevron-back.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
<<<<<<< HEAD
// import { useSelector, useDispatch } from "react-redux";
// import { updateItemQuantity } from "../Redux/cartSlice";
=======

>>>>>>> eb70fa855aa9d9b40fa4fbfd44c63726da582c81
import dellXPS13Img from '../assets/Name=Dell-XPS-13-White.png';
import iphone11NavyImg from '../assets/Name=Iphone-12-Pro-02.png';
import iphone11WhiteImg from '../assets/Name=Iphone-13-Pro-03.png';
import iphone11BlackImg from '../assets/Name=Iphone-13-Pro-02.png';

const CheckoutForm = ({ items, shipping, gst, giftCard, total }) => {
    const navigate = useNavigate();

<<<<<<< HEAD

=======
    const changePayment = () => {
        navigate('/payment');
    };
>>>>>>> eb70fa855aa9d9b40fa4fbfd44c63726da582c81

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



                <button type='button' onClick={() => navigate(-1)} className='backbutton'>
                    <img src={back} alt='back' />
                    Back
                </button>
            </section>

<<<<<<< HEAD

=======
            <hr style={{ background: 'gray', color: 'gray', borderColor: 'gray', height: '10px' }} />
>>>>>>> eb70fa855aa9d9b40fa4fbfd44c63726da582c81

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
                    <div className='col-2 address'>
                        <button className="change-address-btn">Change</button>
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
                        <p><i className="fas fa-gift"></i> $ 53.21
                            <span className='gift-card'> gift card balance</span>
                        </p>
                        <p><i className="fas fa-address-card"></i> Billing address same as Shipping Address</p>
                    </div>
<<<<<<< HEAD
                    <div className='col-2 address'>
                        <button className="change-address-btn">Change</button>
                    </div></div>
=======
                    <div className='col-2'>
                        <button className="change-address-btn" onClick={changePayment}>Change</button>
                    </div>
                </div>
>>>>>>> eb70fa855aa9d9b40fa4fbfd44c63726da582c81
            </section>

            {/* Review Your Bag Section */}
            <section className="review-bag mt-5">
                <h1 className="subtitle-expanded pb-5">Review Your Bag</h1>
                <div className="items-grid">
                    <div className="item-card">
                        <div className='row'>
                            <div className='col'>
                                <img src={dellXPS13Img} alt="Dell XPS 13" className="item-image" />
                            </div>
                            <div className='col'>
                                <div className="item-details">
                                    <h3>Dell XPS 13</h3>
                                    <span className='color-text'>White</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                    <p>4.5 / 5</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="card-text mb-0">
                                            $ 1799.99 x <span> 1</span>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-danger border-0 me-2"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">1</span>
                                            <button
                                                className="btn btn-outline-success border-0 ms-2"
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
                    <div className="item-card">
                        <div className='row'>
                            <div className='col'>
                                <img src={iphone11NavyImg} alt="iphone11NavyImg" className="item-image" />
                            </div>
                            <div className='col'>
                                <div className="item-details">
                                    <h3>Iphone 11</h3>
                                    <span className='color-text'>Navy Blue</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                    <p>4.5 / 5</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="card-text mb-0">
                                            $ 1799.99 x <span> 1</span>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-danger border-0 me-2"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">1</span>
                                            <button
                                                className="btn btn-outline-success border-0 ms-2"
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
                    <div className="item-card">
                        <div className='row'>
                            <div className='col'>
                                <img src={iphone11WhiteImg} alt="iphone11WWhiteImg" className="item-image" />
                            </div>
                            <div className='col'>
                                <div className="item-details">
                                    <h3>Iphone 11</h3>
                                    <span className='color-text'>Milky White</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                    <p>4.5 / 5</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="card-text mb-0">
                                            $ 1799.99 x <span> 1</span>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-danger border-0 me-2"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">1</span>
                                            <button
                                                className="btn btn-outline-success border-0 ms-2"
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
                    <div className="item-card">
                        <div className='row'>
                            <div className='col'>
                                <img src={iphone11BlackImg} alt="iphone11BlackImg" className="item-image" />
                            </div>
                            <div className='col'>
                                <div className="item-details">
                                    <h3>Iphone 11</h3>
                                    <span className='color-text'>Serious Black</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                                    <p>4.5 / 5</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="card-text mb-0">
                                            $ 1799.99 x <span> 1</span>
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-danger border-0 me-2"
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">1</span>
                                            <button
                                                className="btn btn-outline-success border-0 ms-2"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckoutForm;
