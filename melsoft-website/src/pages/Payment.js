import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardIcon from '../assets/Name=card.png';
import icon from '../assets/Selected=True.png';
import calendar from '../assets/Name=calendar-number.png';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const [cardDetails, setCardDetails] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });
    const [cards, setCards] = useState([
        { type: 'MasterCard', last4: '4242' },
        { type: 'VISA Debit', last4: '2894' }
    ]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCardDetails(prevDetails => ({
            ...prevDetails,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { cardNumber } = cardDetails;

        // Validate card number length =16
        const cardNumberDigits = cardNumber.replace(/\D/g, ''); // Remove non-digit characters
        if (cardNumberDigits.length !== 16) {
            setError('Card number must be 16 digits long.');
            return;
        }

        setError('');
        const last4Digits = cardNumberDigits.slice(-4);
        const newCardType = cardNumberDigits.startsWith('4') ? 'VISA' : 'MasterCard';

        // Update state with new card
        setCards(prevCards => [
            ...prevCards,
            { type: `${newCardType} ending in`, last4: last4Digits }
        ]);

        // Store the new card details in sessionStorage for use in another page
        sessionStorage.setItem('newCard', JSON.stringify({
            type: newCardType,
            last4: last4Digits
        }));

        // Clear fields
        setCardDetails({
            cardholderName: '',
            cardNumber: '',
            expiryDate: '',
            cvc: ''
        });
    };

    return (
        <div className="container pt-5" style={{ paddingTop: '0', paddingBottom: '0' }}>
            {/* Card Selection Section */}
            <div className="card mb-4" style={{ borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <h5 className="card-title">SELECT A CARD</h5>
                    {cards.map((card, index) => (
                        <div key={index} className="form-check mb-2 d-flex align-items-center" style={{ gap: '8px' }}>
                            <img
                                src={CardIcon}
                                alt="Card"
                                style={{ width: '24px', height: '24px', filter: 'grayscale(100%)' }}
                            />
                            <label className="form-check-label" style={{ color: 'gray' }}>
                                {card.type} ending in {card.last4}
                            </label>
                        </div>

                    ))}
                </div>
            </div>

            {/* Add a New Card Section */}
            <div className="card" style={{ borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', maxWidth: '600px' }}>
                <div className="card-body">
                    <h5 className="card-title">ADD A NEW CARD</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="cardholderName"
                                className="form-label"
                                style={{ color: 'gray' }}
                            >
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cardholderName"
                                placeholder="John Maker"
                                value={cardDetails.cardholderName}
                                onChange={handleChange}
                                style={{
                                    color: 'gray',
                                    boxShadow: '0px 4px 15px rgba(167, 166, 166, 0.5)'
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="cardNumber"
                                className="form-label"
                                style={{ color: 'gray' }}
                            >
                                Card Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cardNumber"
                                placeholder="5126-5987-2214-7621"
                                style={{
                                    backgroundImage: `url(${CardIcon})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '10px center',
                                    paddingLeft: '40px',
                                    color: 'gray',
                                    boxShadow: '0px 4px 15px rgba(167, 166, 166, 0.5)'
                                }}
                                value={cardDetails.cardNumber}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <label
                                    htmlFor="expiryDate"
                                    className="form-label"
                                    style={{ color: 'gray' }}
                                >
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expiryDate"
                                    placeholder="MM / YYYY"
                                    style={{
                                        backgroundImage: `url(${calendar})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: '10px center',
                                        paddingLeft: '40px',
                                        color: 'gray',
                                        boxShadow: '0px 4px 15px rgba(167, 166, 166, 0.5)'
                                    }}
                                    value={cardDetails.expiryDate}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col">
                                <label
                                    htmlFor="cvc"
                                    className="form-label"
                                    style={{ color: 'gray' }}
                                >
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cvc"
                                    placeholder="123"
                                    style={{
                                        color: 'gray',
                                        boxShadow: '0px 4px 15px rgba(167, 166, 166, 0.5)'
                                    }}
                                    value={cardDetails.cvc}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <div className="mb-3 form-check">
                            <img src={icon} alt='icon' />
                            <label className="form-check-label" htmlFor="defaultPayment">
                                Save this as your default payment method
                            </label>
                        </div>

                        <button type="submit" className="btn btn-dark w-100">
                            <img src={CardIcon} alt="icon" style={{ filter: 'brightness(0) invert(1)', width: '24px', height: '24px' }} />
                            Add Payment Method
                        </button>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <button
                                type="button"
                                className="btn btn-link"
                                onClick={() => navigate('/Checkoutform')}
                                style={{ color: 'black' }}
                            >
                                Back
                            </button>


                            <div className="text-success">
                                <i className="fas fa-lock"></i> Secure Connection
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
