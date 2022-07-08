import User from "../models/login.js";
import Event from "../models/event.js";
import ImageServices from "../services/upload-image.js";
// @desc    - Add NEW Event
// @route   POST /admin/add-event
// @access  ADMIN / MODERATOR

const addEvent = async (req, res) => {
  const { id } = req.data;
  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Not Authorized to Add Event",
    });
  }
  if (user.role !== "ADMIN" && user.role !== "MODERATOR") {
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
    rules,
  } = req.body;
  const buffer = Buffer.from(
    thumbnail.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
    "base64"
  );
  try {
    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const uploadThumbnail = await ImageServices.upload(buffer, imagePath);
    if (!uploadThumbnail) {
      return res
        .status(500)
        .json({ message: "Could not process the image", success: false });
    }
    const event = new Event({
      title,
      description,
      thumbnail: uploadThumbnail,
      category,
      totalSlots: slots,
      slots,
      entryFee,
      venue,
      eventDate,
      timing,
      organisedBy,
      rules,
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
