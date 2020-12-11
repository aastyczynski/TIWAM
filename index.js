const express = require('express');
const app = express();
const APP_PORT = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');


dotenv.config();


mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log('Connected to db!')
});


app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);
app.use('/',express.static('public'))

app.listen(APP_PORT, () => {
    console.log(`Server is running at port ${APP_PORT}`)
});