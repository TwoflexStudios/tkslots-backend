/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import config from "./convict";
import userModel, { PermissionsEnum, UserStatusEnum } from "../schemas/users";
import { EncryptPassword } from "../services/password";
export let isConnected = false;

// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });

export default mongoose.connect(config.get("mongo")).then(async () => {
    isConnected = true;
}).catch(err => {
    isConnected = false
    console.log(`Failed to connect database ${err.message}`)
});