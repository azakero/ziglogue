import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import getAllProducts from './productService';
import axios from 'axios';

interface Specifications {
    display: string,
    processor: string,
    frontCam: string,
    rearCam: string,
    ram: string,
    storage: string,
    batteryCapacity: string,
    os: string;
}

export interface Products {
    title: string,
    slug: string,
    description: string,
    color: string,
    price: number,
    image: string,
    specifications: Specifications;
};

export interface Data {
    success: boolean;
    message: string;
    data: Products[] | null;
}

interface ProductState {
    products: Products[] | null,
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string | undefined;
}

export const initialState: ProductState = {
    products: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const getProducts = createAsyncThunk( 'products/getAllProducts', async ( _, thunkAPI ) => {
    try {
        const data = await getAllProducts();
        return data;
    } catch ( error ) {
        if ( axios.isAxiosError( error ) ) {
            const message = ( error.response && error.response?.data && error.response?.data.message ) || error.message || error.toString();
            return thunkAPI.rejectWithValue( message );
        } else {
            throw new Error( 'Something went wrong, please try again!' );
        }
    }
} );

export const productSlice = createSlice( {
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder
            .addCase( getProducts.pending, ( state ) => {
                state.isLoading = true;
            } )
            .addCase( getProducts.fulfilled, ( state, action: PayloadAction<Data> ) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = action.payload.data;
                state.message = action.payload.message;
            } )
            .addCase( getProducts.rejected, ( state, action ) => {
                console.log( action );
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.products = null;
            } );
    }
} );

export const getProductsSelector = ( state: RootState ) => state.products;
export default productSlice.reducer;