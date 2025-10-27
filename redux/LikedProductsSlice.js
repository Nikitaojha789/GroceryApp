import { createSlice } from "@reduxjs/toolkit";

const LikedProductsSlice = createSlice({
    name: "LikedProducts",
    initialState: [],
    reducers: {
        addLikedItem: (state, action) => {
            const item = action.payload;
            const alreadyExists = state.find(item => item.id === action.payload.id)
            console.log(alreadyExists);
            if (!alreadyExists) {
                console.log("Adding item with quantity 1:", { ...item, quantity: 1 });
                state.push({ ...item, quantity: 1 });

            }
        },
        removeLikedItem: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
        increaseFromLikes: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                console.log("Increased quantity:", item);
            }
        },
        decreaseFromLikes: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                console.log("decreased quantity:", item);
            }
            else {
                return state.filter(item => item.id !== action.payload.id);

            }
        }
    },
});
export const { addLikedItem, removeLikedItem, increaseFromLikes, decreaseFromLikes } = LikedProductsSlice.actions
export default LikedProductsSlice.reducer;