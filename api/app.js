const express = require('express');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use('/api/phones', productRoutes);

app.get('/', (req, res) => {
    res.send('Test')
})

app.use(notFound);
app.use(errorHandler);

module.exports = app;