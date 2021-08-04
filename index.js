const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter')
const PORT = process.env.PORT ||7000;


const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.o8sgc.mongodb.net/auth_roles?retryWrites=true&w=majority')
        app.listen(PORT, ()=> console.log(`All right! SERVER has been started on ${PORT}`))
    } catch(e) {
        console.log(e)
    }
};

start();
