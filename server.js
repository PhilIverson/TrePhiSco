const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");

app.use(express.json());
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));


mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },  () => {
    console.log('Connected to MongoDB')
})


app.use("/auth", require("./routes/auth"));
app.use('/api/compare', require('./routes/compare.model'));
app.use('/api/procedure', require('./routes/procedure.model'));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})