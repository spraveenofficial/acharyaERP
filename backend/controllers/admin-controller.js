import User from "../models/login.js";
// @desc    - Add NEW Event
// @route   POST /admin/add-event
// @access  ADMIN / MODERATOR

const addEvent = async (req, res) => {
  const { id } = req.data;
  const user = await User.findById(id);
  if (!user || user.role !== "ADMIN" || user.role !== "MODERATOR") {
    return res.status(400).json({
      success: false,
      message: "User not found",
    });
  }
  
};
