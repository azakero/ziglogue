const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    if (process.env.NODE_ENV === 'production') {
        return res.status(statusCode).json({
            success: false,
            message: 'Server Error. Please try again',
            data: null
        });
    }

    res.status(statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack,
        data: null
    })
}

module.exports = {
    notFound, errorHandler
}