import express from "express";
import { registerUser,login, getUsers } from "./usersCont";
import { isAdmin } from "./midllewear";

const router = express.Router();

router
  .post("/login", login)
  .post("/register-user", registerUser)
  .get("/get-users", isAdmin, getUsers);

export default router;
