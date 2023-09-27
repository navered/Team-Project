import   { User, UserModel, users }  from "./usersModel";
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const { SECRET } = process.env;
const secret = SECRET;

const saltRounds = 10;

//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");

    //this was in typescript
    // const user = new User({ email, password });

    //encrypt password with bcrypt.js
    const hash = await bcrypt.hash(password, saltRounds);

    const user = new UserModel({ email, password: hash });
    const userDB = await user.save();
    console.log(userDB)
    //check if user already exist
    // const userExist = users.find((user) => user.email === email);
    // if (userExist) throw new Error("User already exist");
    // users.push(user);
    res.send({ ok: true, userDB });

  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Please complete all fields");
    //check if user exist and password is correct
    const userDB = await UserModel.findOne({ email });

    if (!userDB) throw new Error("some of the details are incorrect");

    const { password: hash } = userDB;
    //  { password} = user;
    //  const hash = password;

    if (!hash) throw new Error("some of the details are incorrect");

    //check if hash password is equal to the password that the user entered
    const match:boolean = await bcrypt.compare(password, hash);
    if (!match) throw new Error("some of the details are incorrect");

    const cookie = {
      uid: userDB._id,
      role: userDB.role || "user",
    }
    //incript with JWT
    // encode
    const token = jwt.encode(cookie, secret);
    console.log(token)

    res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
    res.send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
}

export async function getUsers(req: any, res: any) {
  try {
    const users = await UserModel.find();
    res.send({ ok: true, users });
  } catch (error) {
    console.error(error);
    res.send({ error: error.message });
  }
}

