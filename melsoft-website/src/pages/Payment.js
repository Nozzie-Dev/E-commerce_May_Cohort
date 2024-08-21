import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardIcon from '../assets/Name=card.png';
import icon from '../assets/Selected=True.png';
import calendar from '../assets/Name=calendar-number.png'

const Payment = () => {
  return (
    <div className="container mt-5">
      {/* Card Selection Section */}
      <div className="card mb-4" style={{borderRadius:'13px', width: '676px'}}>
        <div className="card-body">
          <h5 className="card-title">SELECT A CARD</h5>
          <div className="form-check mb-2 d-flex align-items-center" style={{ gap: '8px' }}>
  <img src={CardIcon} alt="Card" style={{ width: '24px', height: '24px' }} />
  <label className="form-check-label" htmlFor="masterCard">
    MasterCard ending in 4242
  </label>
</div>

<div className="form-check mb-2 d-flex align-items-center" style={{ gap: '8px' }}>
  <img src={CardIcon} alt="Card" style={{ width: '24px', height: '24px' }} />
  <label className="form-check-label" htmlFor="visaDebit">
    VISA Debit ending in 2894
  </label>
</div>

        </div>
      </div>

      {/* Add a New Card Section */}
      <div className="card" style={{borderRadius:'13px', width: '676px'}}>
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
                <input type="text" className="form-control" id="expiryDate" placeholder="MM / YYYY" style={{ 
                        backgroundImage: `url(${calendar})`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: '10px center', 
                        paddingLeft: '40px' 
                    }}  />
              </div>

              <div className="col">
                <label htmlFor="cvc" className="form-label">CVC</label>
                <input type="text" className="form-control" id="cvc" placeholder="123" />
              </div>
            </div>

            <div className="mb-3 form-check">
            <img src={icon} alt='icon' />
              <label className="form-check-label" htmlFor="defaultPayment">
                Save this as your default payment method
              </label>
            </div>

            <button type="submit" className="btn btn-dark w-100">
            <img src={CardIcon} alt="icon" style={{ filter: 'brightness(0) invert(1)', width: '24px',height:'24px' }} />
              Add Payment Method
            </button>
            <div class="d-flex justify-content-between align-items-center">
    <a href="/CheckoutForm" class="text-dark">Back</a>
    <div class="text-success">
      <i class="fas fa-lock"></i> Secure Connection
    </div>
  </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
