const mongoose = require('mongoose');

// const connectionString = process.env.connetionString

const connectToDb = async ()=>{
 mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log("connected to mongo")
 }).catch((error)=>{
    console.log(error)
 })
}
module.exports = connectToDb