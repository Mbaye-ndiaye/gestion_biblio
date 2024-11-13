// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    itemCount: JSON.parse(localStorage.getItem('cartItems'))?.reduce((count, item) => count + item.quantity, 0) || 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.itemCount += 1;
            localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity -= 1;
                if (state.items[itemIndex].quantity === 0) {
                    state.items.splice(itemIndex, 1);
                }
                state.itemCount -= 1;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        updateItemQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const difference = action.payload.quantity - state.items[itemIndex].quantity;
                state.items[itemIndex].quantity = action.payload.quantity;
                state.itemCount += difference;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        },
        deleteItemFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.itemCount -= state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
        }
    },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
