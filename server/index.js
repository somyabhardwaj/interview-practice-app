 
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.port;
const connectToMongo = require('./db/connectToDb.js')

const app = express();
app.use(express.json());
app.use(cors());
connectToMongo().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is listning at ${PORT}`)    
      })
})

app.get("/",(req,res)=>{
    res.send(`App is live at 6002 ${PORT}`)
})

