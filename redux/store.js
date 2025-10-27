import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import favouritesReducer from "./favouritesSlice";
import myProductsReducer from './myProductsSlice';
import LikedProductsReducer from './LikedProductsSlice';


const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
    myProducts: myProductsReducer,
    LikedProducts: LikedProductsReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                ],
            },
        }),
});

export const persistor = persistStore(store);




