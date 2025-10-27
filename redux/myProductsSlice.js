import { createSlice } from "@reduxjs/toolkit";

const myProductsSlice = createSlice({
    name: "myProducts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },

});
export const { fetchStart, fetchSuccess, fetchFail } = myProductsSlice.actions;
export default myProductsSlice.reducer;