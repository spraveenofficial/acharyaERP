import axios from "axios";
import { header } from "../utils/headers.js";
class Auth {
  async aliveLogin(auid, password) {
    const { data } = await axios({
      url: process.env.ALIVE_LOGIN,
      method: "POST",
      headers: header(),
      data: {
        username: auid,
        password: password,
        usertype: "STUDENT",
      },
    });
    return data.token;
  }
}

export default new Auth();
