import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(
()=>{console.log('Connected to mongoDB!');
}).catch((err)=>{console.log(err)}
);
const app = express();
app.listen(300, () => {
  console.log(`Server is running on port 300`);
});
