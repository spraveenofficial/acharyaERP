import axios from "axios";

class Auth {
  async aliveLogin(auid, password) {
    const response = await axios({
      url: process.env.ALIVE_LOGIN,
      method: "POST",
      data: {
        username: auid,
        password: password,
        usertype: "STUDENT",
      },
      headers: {
        Origin: "https://alive.university",
        Referer: "https://alive.university/",
      },
    });
    return response.data.token;
  }
  async getOnlineClasses(token) {
    const response = await axios({
      url: process.env.ONLINE_CLASSES,
      method: "POST",
      headers: {
        Origin: "https://alive.university",
        Referer: "https://alive.university/",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.data.success) {
      return [];
    }
    return response.data.data;
  }
}

export default new Auth();
