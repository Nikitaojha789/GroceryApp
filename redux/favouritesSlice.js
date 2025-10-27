import { createSlice } from "@reduxjs/toolkit";
let nextId = 1;

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
        items: []
    },
    reducers: {
        addToFavourites: (state, action) => {
            const item = action.payload;


            const uniqueId = item.id ?? `fav-${nextId++}`;


            const exists = state.items.find(i => i.id === uniqueId);
            if (!exists) {
                state.items.push({ ...item, id: uniqueId, quantity: 1 });
            }
        },
        removeFromFavourites: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id);
        },
        increaseFromFavourites: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseFromFavourites: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(i => i.id !== action.payload.id);
            }
        },


    }

});

export const { addToFavourites, removeFromFavourites, increaseFromFavourites, decreaseFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
