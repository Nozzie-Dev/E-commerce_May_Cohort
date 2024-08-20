import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardIcon from '../assets/Name=card.png';

const Payment = () => {
  return (
    <div className="container mt-5">
      {/* Card Selection Section */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">SELECT A CARD</h5>
          <div className="form-check mb-2">
          <img src={CardIcon} alt="Card" style={{ width: '24px', height: '24px' }} />
            <label className="form-check-label" htmlFor="masterCard">
              MasterCard ending in 4242
            </label>
          </div>
          <div className="form-check mb-2">
          <img src={CardIcon} alt="Card" style={{ width: '24px', height: '24px' }} />
            <label className="form-check-label" htmlFor="visaDebit">
             VISA Debit ending in 2894
            </label>
          </div>
        </div>
      </div>

      {/* Add a New Card Section */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ADD A NEW CARD</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" id="cardholderName" placeholder="John Maker" />
            </div>

            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input 
                    type="text" 
                    className="form-control" 
                    id="cardNumber" 
                    placeholder="5126-5987-2214-7621" 
                    style={{ 
                        backgroundImage: `url(${CardIcon})`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: '10px center', 
                        paddingLeft: '40px' 
                    }} 
                    />
                </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <input type="text" className="form-control" id="expiryDate" placeholder="MM / YYYY" />
              </div>

              <div className="col">
                <label htmlFor="cvc" className="form-label">CVC</label>
                <input type="text" className="form-control" id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="defaultPayment" 
              />
              <label className="form-check-label" htmlFor="defaultPayment">
                Save this as your default payment method
              </label>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Add your card
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
