import axios from 'axios';
import { Data } from './productSlice';

const API_URL: string = '/api/phones';

const getAllProducts = async (): Promise<Data> => {
    const response = await axios.get( API_URL );
    return response.data;
};

export default getAllProducts;