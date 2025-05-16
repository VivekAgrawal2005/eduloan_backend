const mongoose = require('mongoose');
require('dotenv').config();
const mongourl = process.env.mongoURL ;


mongoose.connect(mongourl);

const db = mongoose.connection;

db.on('connected' , ()=>
{
    console.log("database connected succesfully");
})
db.on('disconnected',()=>
{
    console.log("database disconnected");
})
db.on('error',()=>
{
    console.log("error occured");
})
module.exports = db;