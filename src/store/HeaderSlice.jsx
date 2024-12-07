import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    basket: false,
}


export const headerSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setbasket: (state) => {
           state.basket = !state.basket
        },
    },
})

// Action creators are generated for each case reducer function
export const { setbasket } = headerSlice.actions

export default headerSlice.reducer