const mongoose = require('mongoose');
const config = require('config');

const MONGO_URI = "mongodb+srv://Afnan:F6RMDrOv1WdbEOew@cluster0.hfkkq.gcp.mongodb.net/?retryWrites=true&w=majority";

// connect DB
const connecDB = async () => {

    try {
       await mongoose.connect("mongodb+srv://afnan:Fct62xtQKjitsya@cluster0.daqcibd.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully!')
    } catch (error) {
        console.log('Unable to connect:', error.message);
    }
}

module.exports = connecDB;