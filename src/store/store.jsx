import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductsSlice.jsx";
import ProductInfoReducer from "./ProductInfoSlice.jsx";
import HeaderReducer from "./HeaderSlice.jsx";

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        productInfo: ProductInfoReducer,
        header : HeaderReducer
    },
})