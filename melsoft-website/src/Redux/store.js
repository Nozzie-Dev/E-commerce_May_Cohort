
// This function simplifies the setup of a Redux store by automatically configuring the store with good default settings.
import { configureStore } from '@reduxjs/toolkit';


// This reducer will handle all the state updates related to the cart.
import cartReducer from './cartSlice';


// The store is where all the state of the application lives.
const store = configureStore({
    // The reducer option allows you to define all the slices of state your application needs.
    // Each slice is handled by a specific reducer function.
    reducer: {
        // The 'cart' slice of state is managed by the cartReducer.
        // In the Redux store, the cart state will be accessible under the 'cart' key.
        cart: cartReducer,
    },
});


// The store will be provided to the React app through the <Provider> component. which is in index.js
export default store;
