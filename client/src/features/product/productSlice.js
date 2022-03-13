import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
    products: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getProducts = createAsyncThunk( 'product/getAllProducts', async ( thunkAPI ) => {
    try {
        return await productService.getAllProducts();
    } catch ( error ) {
        const message = ( error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
        return thunkAPI.rejectWithValue( message );
    }
} );

export const productSlice = createSlice( {
    name: 'product',
    initialState,
    reducers: {
        reset: ( state ) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getProducts.pending, ( state ) => {
                state.isLoading = true;
            } )
            .addCase( getProducts.fulfilled, ( state, action ) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload.message;
                state.products = action.payload.data;
            } )
            .addCase( getProducts.rejected, ( state, action ) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload.message;
                state.products = null;
            } );
    }
} );

export const { reset } = productSlice.actions;
export default productSlice.reducer;