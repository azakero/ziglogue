const asyncHandler = require('express-async-handler');
const data = require('../resources/data.json');

// @desc Get all products
// @route GET /phones
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {

    if (data.length === 0 || !data) {
        return res.status(404).json({
            success: false,
            message: 'Products Not Found!',
            data: null
        });
    }

    res.status(200).json({
        success: true,
        message: 'Data Fetched Successfully!',
        data
    });
});

module.exports = {
    getAllProducts
}