import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static("public"));
app.use(cookieParser())

//body
app.use(express.json());

import userRouter from "./API/users/usersRoutes";
app.use("/API/users", userRouter);

import productRouter from "./API/products/productsRoutes";
app.use("/API/products", productRouter);

mongoose
  .connect(
    "mongodb+srv://vnavev:mDSAr2zEw0bzDM2a@cluster0.nzfjztb.mongodb.net/UserSchema",
  )
  .then(() => console.log("mongoose connected!"))
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`App listening on PORT:  ${port}`);
});
