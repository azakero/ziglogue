import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_RESET,
} from '../constants/productConstant';

const initialState = {}

export const getProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                loading: true
            };
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case GET_ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case GET_ALL_PRODUCTS_RESET:
            return {};
        default:
            return state;
    }

}
