import axios from "axios";
import { header } from "../utils/headers.js";
class Auth {
  async aliveLogin(auid, password) {
    const response = await axios({
      url: "https://api.alive.university/api/v1/login/erp",
      method: "POST",
      data: {
        username: auid,
        password: password,
        usertype: "STUDENT",
      },
      headers: header,
    });
    console.log(response.data);
    return response.data.token;
  }
}

export default new Auth();
