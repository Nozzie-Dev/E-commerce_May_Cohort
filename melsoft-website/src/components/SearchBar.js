import React, { useState } from 'react';
import '../App.css';


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <>
            <div className='searchbar'>
                <label className='search-engine'>Search Item</label>
                <input
                    type="text"
                    placeholder="Apple Watch,Samsung S21,Macbook Pro, ..."
                    value={query}
                    onChange={handleChange}
                    className='search-input'
                />
            </div>
        </>
    );
};

export default SearchBar;
