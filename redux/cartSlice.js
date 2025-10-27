// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const item = action.payload;
//             const exists = state.items.find(i => i.idMeal === item.idMeal);
//             if (!exists) {
//                 state.items.push(item);
//             }
//         },
//         removeFromCart: (state, action) => {
//             state.items = state.items.filter(i => i.idMeal !== action.payload.idMeal);
//         }
//     }
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
