import axios from "axios";
import User from "../models/login.js";
import Alive from "../services/alive-services.js";
const login = async (req, res) => {
  const { auid, password } = req.body;
  const { data } = await axios({
    url: process.env.ERP_LOGIN,
    method: "POST",
    data: {
      username: auid,
      password: password,
      usertype: "STUDENT",
    },
  });
  if (!data.success) {
    return res.json({
      success: false,
      message: "Invalid Credentials",
    });
  } else {
    const isExist = await User.findOne({ auid: auid });
    if (!isExist) {
      const user = new User({
        auid: auid,
        role: "STUDENT",
      });
      await user.save();
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Logged in",
      token: data.token,
      aliveToken: await Alive.aliveLogin(auid, password),
    });
  }
};

export { login };
