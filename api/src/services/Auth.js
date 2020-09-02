import jwt from "jsonwebtoken";
import config from "../config/index.js";
import db from "../loaders/db.js";
import { randomColor } from "../utils/index.js";
import { nanoid } from "nanoid";
import { UserModel } from "../models/index.js";

export default class AuthService {
  async SignUp(userInput) {
    try {
      console.log("Creating user db record");
      const userModel = new UserModel();
      const userRecord = await userModel.create(userInput);
      const token = this.generateToken(userRecord);
      if (!userRecord) {
        throw new Error("User cannot be created");
      }
      return { ...userRecord, token };
    } catch (e) {
      throw e;
    }
  }

  generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    /**
     * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
     * The cool thing is that you can add custom properties a.k.a metadata
     * Here we are adding the userId, role and name
     * Beware that the metadata is public and can be decoded without _the secret_
     * but the client cannot craft a JWT to fake a userId
     * because it doesn't have _the secret_ to sign it
     * more information here: https://softwareontheroad.com/you-dont-need-passport
     */
    return jwt.sign(
      {
        _id: user.id, // We are gonna use this in the middleware 'isAuth'
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret
    );
  }
}
