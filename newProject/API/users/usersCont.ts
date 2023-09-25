import { log } from "console";
import UserModel from "./usersModel";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw new Error("some of the parameters not valid");
    const user = await UserModel.find({ email: email, password: password });
    if (!user) throw new Error("Incorrect email or password");
    res.send({ user, ok: true });
    log(email + " ! ! ! -- LOGIN SUCCESSFUL ! ! !");
  } catch (error) {
    console.error(error.message);
  }
}

export async function register(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("invalid email or password");
    if (await UserModel.findOne({ email: email }))
      throw new Error("this email already used");
    const newUser = await new UserModel({ email, password });
    const userDB = await newUser.save();
    res.send({ success: true });
    log(newUser.email + " ! ! ! -- REGISTER SUCCESSFUL -- ! ! !");
  } catch (error) {
    console.log(await UserModel.find({}));
    console.error(error.message);
  }
}
