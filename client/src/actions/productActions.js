import axios from 'axios';
import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
    GET_ALL_PRODUCTS_RESET,
} from '../constants/productConstant';

export const getProducts = () => async (dispatch) => {

    try {

        dispatch({
            type: GET_ALL_PRODUCTS_REQUEST
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.get('/api/phones', config);

        dispatch({
            type: GET_ALL_PRODUCTS_SUCCESS,
            payload: data.data
        });

    } catch (error) {

        dispatch({
            type: GET_ALL_PRODUCTS_RESET
        });

        dispatch({
            type: GET_ALL_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }

}

