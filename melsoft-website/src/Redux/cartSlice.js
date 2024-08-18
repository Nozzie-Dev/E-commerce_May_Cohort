import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            state.items.push(item);
        },
    },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
