import Event from "../models/event.js";

// @desc    - Fetch all Events
// @route   POST /api/auth/login
// @access  Public

const fetchEvents = async (req, res) => {
  const events = await Event.find({});
  return res.status(200).json({
    success: true,
    data: events,
    message: "Events Fetched Successfully",
  });
};

export { fetchEvents };
