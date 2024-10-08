import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/cartSlice';
import '../App.css';
import Product from '../components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppleWatch from '../assets/Name=Watch.png';
import HeadPhones from '../assets/Name=Headphones.png';
import iPhone11 from '../assets/Name=Iphone-12-01.png';
import iPhone2 from '../assets/Name=Iphone-12-02.png';
import iPhone3 from '../assets/Name=Iphone-12-03.png';
import iPhone4 from '../assets/Name=Iphone-12-04.png';
import Search from '../components/SearchBar';
import Sidebar from '../components/bagSideBar';
import BagSummary from '../components/bagSummary';

// declared product data for rendering the product list
const productData = [
    { id: 1, image: AppleWatch, name: 'Apple Watch', description: 'Series 5 SE', price: 529.99 },
    { id: 2, image: HeadPhones, name: 'Sony ZX33OBT', description: 'Light Grey', price: 39.99 },
    { id: 3, image: iPhone11, name: 'Iphone 11', description: 'Serious Black', price: 619.99 },
    { id: 4, image: iPhone2, name: 'Iphone 11', description: 'Subway Blue', price: 619.99 },
    { id: 5, image: iPhone3, name: 'Iphone 11', description: 'Product RED', price: 619.99 },
    { id: 6, image: iPhone4, name: 'Iphone 11', description: 'Milky White', price: 619.99 },
    { id: 7, image: iPhone3, name: 'Iphone 13', description: 'Product RED', price: 619.99 },
    { id: 8, image: iPhone3, name: 'Iphone 14', description: 'Product RED', price: 619.99 },
];

const ProductList = () => {
    // State to hold the search query entered by the user
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

    // Function to update the search query state based on user input
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // Function to handle adding a product to the cart
    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product)); // Dispatching the action to add the product to the cart
    };

    // Filtering products based on the search query
    const filteredProducts = productData.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Match product name
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) // Match product description
    );

    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="product-list-container">
                <Search onSearch={handleSearch} />
                <div className="product-list">
                    <div className="row">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="col-md-3 mb-4">
                                <Product
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    description={product.description}
                                    onAddToCart={() => handleAddToCart(product)} // Callback to add product to cart
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BagSummary />
        </div>
    );
};

export default ProductList;
