import { Schema, model } from 'mongoose';


export class User {
  email: string;
  password: string;
  role: string;
  id: string;

  constructor({ email, password}: { email: string, password: string }) {
    this.email = email;
    this.password = password;
    this.role = "user";
    this.id = Math.random().toString();
  }

  setRole(role: string) {
    this.role = role;
  }
}

//define a schema (It is like interface in typescript)


export const UserSchema = new Schema({
  email: {
    type:String,
    required:true,
    unique:true
  }, // String is shorthand for {type: String}
  password: String,
  role: String,
});
//"users" is the name of the collection in the DB
export const UserModel = model("users", UserSchema)


export const users: User[] = [];
