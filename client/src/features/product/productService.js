import axios from 'axios';

const API_URL = '/api/phones';

const getAllProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}

const productService = {
    getAllProducts
}

export default productService;