import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
}


export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    },
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = !state.loading
            })
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = !state.loading
            })

    }

})

// Action creators are generated for each case reducer function
export const { increment } = productsSlice.actions

export default productsSlice.reducer