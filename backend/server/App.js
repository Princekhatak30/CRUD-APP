const express = require('express');
require('dotenv').config();
const app = express();
require('./db/conn')
const port = 1200;
const cors = require('cors');
const userRouter = require('./routes/Routes');
app.use(userRouter)
app.use(cors());
app.use(express.json())
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})