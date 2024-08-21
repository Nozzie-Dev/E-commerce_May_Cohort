import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AddressPage.css';
import icon from '../assets/Selected=True.png';
import { useNavigate } from 'react-router-dom';


const AddressPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <div className='address-container'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Shipping Name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Street Name</label>
                            <input type="name" className="form-control" id="exampleInputPassword1 " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">City</label>
                            <input type="name" className="form-control" id="exampleInputPassword1 " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">State/Province</label>
                            <input type="name" className="form-control" id="exampleInputPassword1 " />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Country</label>
                            <input type="name" className="form-control" id="exampleInputPassword1 " />
                        </div>
                        <div class="mb-3 form-check">
                            <p className='saving'> <img src={icon} alt="icon" />  Save this as your default address</p>
                        </div>
                        <button type="submit" class="btn-primary add-address mb-4">Add Address</button>
                        <div className='back-btn'>
                            <button onClick={() => navigate(-1)} className='backbutton'>
                                Back
                            </button></div>
                        <div className='connection'>Secure Connection</div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddressPage;