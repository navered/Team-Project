import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static('public'));
app.use(cookieParser())

//body
app.use(express.json());
const {MONGO_URI} = process.env;
mongoose.connect(MONGO_URI).then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})

import userRouter from "./API/users/usersRoutes";
app.use("/API/users", userRouter);

import productRouter from "./API/products/productsRoutes";
app.use("/API/products", productRouter);

// import orderRouter from "./API/orders/ordersRoutes";
// app.use("/API/orders", orderRouter);

app.listen(port, () => {
  console.log(`App listening on PORT:  ${port}`);
});
