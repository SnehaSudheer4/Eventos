const express = require('express');
const UseRouter=require('./Routes/UseRouter')
const cors = require('cors');
const connectDB = require('./Config/dbConnection');
const app = express();
app.use(cors());
app.use(express.json());
// require('dotenv').config();

connectDB();

app.use('/', UseRouter);
const PORT =  8000;

app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});