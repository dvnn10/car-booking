const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://dkansal:devin@cluster0.yrchbcj.mongodb.net/car-booking' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose