import axios from "axios";
import { header } from "../utils/headers.js";
class Auth {
  async aliveLogin(auid, password) {
    const { data } = await axios({
      url: process.env.ALIVE_LOGIN,
      method: "POST",
      data: {
        username: auid,
        password: password,
        usertype: "STUDENT",
      },
      headers: header,
    });
    return data.token;
  }
}

export default new Auth();
