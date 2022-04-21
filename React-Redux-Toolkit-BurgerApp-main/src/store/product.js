import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (args) => {
        const response = await axios.get(args)
        return response.data
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        isLoading: false,
        isSuccess: false,
        isRejected: false,
        message: ''
    },
    reducers: {},
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.isLoading = true
            state.isSuccess = false
            state.isRejected = false
            state.message = ''
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.products = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isRejected = false
            state.message = ''
        },
        [fetchProduct.rejected]: (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isRejected = true
            state.message = 'API Error'
        }
    }
})

export default productSlice