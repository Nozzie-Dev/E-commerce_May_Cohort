import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AddressPage.css';
import icon from '../assets/Selected=True.png';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
    const [address, setAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        country: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAddress(prevAddress => ({ ...prevAddress, [id]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!address.name) newErrors.name = 'Shipping Name is required';
        if (!address.street) newErrors.street = 'Street Name is required';
        if (!address.city) newErrors.city = 'City is required';
        if (!address.state) newErrors.state = 'State/Province is required';
        if (!address.country) newErrors.country = 'Country is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sessionStorage.setItem('address', JSON.stringify(address));
            navigate('/Checkoutform');
        }
    };

    return (
        <div className='container'>
            <div className='address-container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Shipping Name</label>
                        <input type="text" className="form-control" id="name" value={address.name} onChange={handleChange} placeholder='John Maker' />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="street" className="form-label">Street Name</label>
                        <input type="text" className="form-control" id="street" value={address.street} onChange={handleChange} placeholder='123 Plae Grond Street' />
                        {errors.street && <div className="text-danger">{errors.street}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" value={address.city} onChange={handleChange} placeholder='Vermont' />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State/Province</label>
                        <input type="text" className="form-control" id="state" value={address.state} onChange={handleChange} placeholder='California' />
                        {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" value={address.country} onChange={handleChange} placeholder='United States of America' />
                        {errors.country && <div className="text-danger">{errors.country}</div>}
                    </div>
                    <div className="mb-3 form-check">
                        <p className='saving'> <img src={icon} alt="icon" />  Save this as your default address</p>
                    </div>
                    <button type="submit" className="btn-primary add-address mb-4">Add Address</button>
                    <div className='back-btn'>
                        <button onClick={() => navigate('/Checkoutform')} className='backbutton'>
                            Back
                        </button>
                    </div>
                    <div className='connection'><i className="fas fa-lock"></i>  Secure Connection</div>
                </form>
            </div>
        </div>
    );
};

export default AddressPage;
