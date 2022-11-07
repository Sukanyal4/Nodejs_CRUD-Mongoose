

const express= require('express');
const connectDB = require( './db/connectiondb.js');
const ejs =require('ejs');
const main =require('./routes/main.js');
const app =express();

const port=process.env.port|| 3000;
const DATABASE_URL = process.eventNames.DATABASE_URL || "mongodb://localhost:27017"
app.set("view engine",'ejs');
app.set('views','views');
//Database Connection
connectDB(DATABASE_URL);
app.use(express.urlencoded({extended:true}));

//Static Files
app.use('/static',express.static('public'));
//Load Routes
app.use("/employee",main);

app.listen(port,()=>{
    console.log('Server is running at https://localhost:',port);
 })