import mongoose from "mongoose";
import { Schema,Types } from "mongoose";

//Create Schema and model
const UserData = new Schema({
    _id: Types.ObjectId,
    email: String,
    username: String,
    userpass: String,
});

export const dataformat = mongoose.model('userdata', UserData);


