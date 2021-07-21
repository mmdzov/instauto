import axios from "axios";
import { post } from "./config";

class UserService {
  async login(username, password) {
    const { data } = await post(`/userlogin`, {
      username,
      password,
    });
    return data;
  }
}

export default new UserService();
