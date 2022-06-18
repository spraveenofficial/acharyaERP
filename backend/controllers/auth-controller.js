import axios from "axios";
import User from "../models/login.js";
import Alive from "../services/alive-services.js";
import { generateAuthToken } from "../services/token-services.js";

// @desc    - Login with ERP
// @route   POST /api/auth/login
// @access  Public

const login = async (req, res) => {
  const { auid, password } = req.body;
  try {
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
      var userId;
      const isExist = await User.findOne({ auid: auid });
      if (!isExist) {
        const user = new User({
          auid: auid,
          role: "STUDENT",
        });
        await user.save();
        userId = user._id;
      }
      return res.status(200).json({
        success: true,
        message: "Successfully Logged in",
        token: data.token,
        aliveToken: await Alive.aliveLogin(auid, password),
        Oauth: generateAuthToken(userId ? userId : isExist._id),
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Server Error, Please try again later.",
    });
  }
};

// @desc    - User Profile
// @route   GET /api/auth/profile
// @access  Public

const profile = async (req, res) => {
  try {
    const { data } = await axios({
      url: process.env.ERP_PROFILE,
      method: "POST",
      headers: {
        token: req.headers.token,
      },
    });
    if (!data.success) {
      return res.status(201).json({
        success: false,
        message: "Unable to retreive Student Information",
      });
    } else {
      const checkStatus = await User.findOne({ auid: data.data.auid });
      return res.status(200).json({
        success: true,
        message: "User data retreive successfully",
        data: {
          ...data.data,
          role: checkStatus.role,
        },
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Server Error",
    });
  }
};

export { login, profile };
