import express from "express"
import { login, registerUser,getUsers, } from "./usersCont";
import { isAdmin } from './middleWear/users';

const router = express.Router()

router
    .post("/login", login)
    .post("/register", registerUser)
    .get("/get-users",isAdmin, getUsers)

export default router;