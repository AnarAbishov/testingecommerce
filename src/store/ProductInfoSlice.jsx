import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    product: {},
    loading: false,
}


export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data
    },
)

export const productInfoSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // increment: (state) => {
        //     state.value += 1
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductById.pending, (state, action) => {
                state.loading = !state.loading
            })
        builder
            .addCase(getProductById.fulfilled, (state, action) => {
                state.product = action.payload
                state.loading = !state.loading
            })

    }

})

// Action creators are generated for each case reducer function
export const { increment } = productInfoSlice.actions

export default productInfoSlice.reducer