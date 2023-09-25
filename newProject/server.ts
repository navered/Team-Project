import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static("public"));

//body
app.use(express.json());

import userRouter from "./API/users/usersRoutes";
app.use("/API/users", userRouter);

import productRouter from "./API/products/productsRoutes";
app.use("/API/products", productRouter);

mongoose
  .connect(
    "mongodb+srv://ruturAdmin:XZNzKBtxePpcnvMf@cluster0.k1el7dn.mongodb.net/",
  )
  .then(() => console.log("mongoose connected!"))
  .catch((err) => {
    console.error(err);
  });

app.listen(port, () => {
  console.log(`App listening on PORT:  ${port}`);
});
