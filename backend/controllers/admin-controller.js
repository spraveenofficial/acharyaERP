import User from "../models/login.js";
import Event from "../models/event.js";
// @desc    - Add NEW Event
// @route   POST /admin/add-event
// @access  ADMIN / MODERATOR

const addEvent = async (req, res) => {
  const { id } = req.data;
  const user = await User.findById(id);
  if (!user || user.role !== "ADMIN" || user.role !== "MODERATOR") {
    return res.status(400).json({
      success: false,
      message: "Not Authorized to Add Event",
    });
  }
  const {
    title,
    description,
    thumbnail,
    category,
    slots,
    entryFee,
    venue,
    eventDate,
    timing,
    organisedBy,
  } = req.body;
  try {
    const event = new Event({
      title,
      description,
      thumbnail,
      category,
      slots,
      entryFee,
      venue,
      eventDate,
      timing,
      organisedBy,
    });
    await event.save();
    return res.status(200).json({
      success: true,
      message: "Event Added Successfully",
      event,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Event Not Added",
      error,
    });
  }
};

export { addEvent };
