import React from 'react';
import { Link } from 'react-router-dom';
import confirmation from '../assets/confirmation.png';
import '../AddressPage.css';


const ConfirmationPage = () => {

    return (
        <>
            <div className='container confirmation-page'>
                <h1 className=''>Confirmation Page</h1>
                <img src={confirmation} alt='confirmation' />
                <p className='message'>Thank you for your order!
                </p>
                <p className='message1'>Your order has been successfully placed and is now being processed.
                </p>

                <Link className='checkout' to="/" style={{ textDecoration: 'none' }}>
                    <button
                        className="btn btn-dark d-flex align-items-center"
                        style={{
                            width: "100%",
                            maxWidth: "139px",
                            height: "40px",
                            padding: "8px 35px",
                            borderRadius: "14px",
                            gap: "8px",
                        }}
                    >  Homepage
                    </button>
                </Link>
            </div>
        </>
    );
};


export default ConfirmationPage;