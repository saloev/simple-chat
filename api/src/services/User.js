import { UserModel } from "../models/index.js";

export default class UserService {
  async users() {
    try {
      const userModel = new UserModel();
      const users = await userModel.users();
      return users;
    } catch (e) {
      throw e;
    }
  }
}
