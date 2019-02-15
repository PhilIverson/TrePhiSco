const express = require('express');
var mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/compare', require('./routes/compare.model'));
app.use('/api/procedure', require('./routes/procedure.model'));

app.use((err, req, res, next) => {
    res.send({ errMsg: err.message })
})

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },  () => {
    console.log('Connected to MongoDB')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
