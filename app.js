const express = require('express');
const app = express();
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(router)
app.use(errorHandler);



module.exports = app;

