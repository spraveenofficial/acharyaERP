import User from "../models/login.js";
import Event from "../models/event.js";
import ImageServices from "../services/upload-image.js";
import Booking from "../models/bookings.js";

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

// @desc    - Access Admin Page
// @route   Get /admin/home
// @access  ADMIN / MODERATOR

const getAdminPage = async (req, res) => {
  const { id } = req.data;
  try {
    const user = await User.findById(id);
    const events = await Event.find({});
    if (user.role === "ADMIN") {
      const totalBookingConfirmedAmount = await Booking.aggregate([
        {
          $lookup: {
            from: "events",
            localField: "event",
            foreignField: "_id",
            as: "event",
          },
        },
        { $match: { "event.status": "completed", status: "completed" } },
        { $group: { _id: null, total: { $sum: "$paymentDetails.TXNAMOUNT" } } },
      ]);
      return res.status(200).json({
        success: true,
        message: "Access Granted",
        data: {
          cardsOfHome: [
            {
              title: "Total Events",
              count: events.length,
              icon: "BsCalendar3EventFill",
            },
            {
              title: "Total Users",
              count: await User.countDocuments(),
              icon: "FaUserGraduate",
            },
            {
              title: "Total Sales",
              count: totalBookingConfirmedAmount[0]?.total
                ? totalBookingConfirmedAmount[0].total
                : 0,
              icon: "FaRupeeSign",
            },
            {
              title: "Super Users",
              count: await User.countDocuments(
                { role: "ADMIN" },
                { role: "MODERATOR" }
              ),
              icon: "FaUserNurse",
            },
          ],
          latestData: [],
        },
      });
    }
    if (user.role === "MODERATOR") {
      const totalBookingConfirmedAmount = await Booking.aggregate([
        {
          $lookup: {
            from: "events",
            localField: "event",
            foreignField: "_id",
            as: "event",
          },
        },
        {
          $match: {
            "event.status": "completed",
            status: "completed",
            "event.organisedBy": user.auid,
          },
        },
        { $group: { _id: null, total: { $sum: "$paymentDetails.TXNAMOUNT" } } },
      ]);
      return res.status(200).json({
        success: true,
        message: "Access Granted",
        data: {
          cardsOfHome: [
            {
              title: "Your Events",
              count: events.filter((event) => event.organisedBy === user.auid)
                .length,
              icon: "BsCalendar3EventFill",
            },
            {
              title: "Total Amount",
              count: totalBookingConfirmedAmount[0]?.total
                ? totalBookingConfirmedAmount[0].total
                : 0,
              icon: "FaRupeeSign",
            },
          ],
        },
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Access Denied",
      error,
    });
  }
};

// @desc    - Access Users Page
// @route   Get /admin/users
// @access  ADMIN

const getUsersPage = async (req, res) => {
  try {
    const allUsers = await User.find({ role: "STUDENT" })
      .select("createdAt auid -_id")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Access Granted",
      data: allUsers,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Inter Server Error",
    });
  }
};

// @desc    - Access Admin and Moderator Page
// @route   Get /admin/admins
// @access  ADMIN

const getAdminsandModPage = async (req, res) => {
  const { id } = req.data;
  try {
    const user = await User.find({
      $or: [{ role: "ADMIN" }, { role: "MODERATOR" }],
      _id: { $ne: id },
    });
    return res.status(200).json({
      success: true,
      message: "Access Granted",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Access Denied",
      error,
    });
  }
};

// @desc    - Manage Admins
// @route   Get /admin/admins
// @access  ADMIN

const removeAdminsAndMods = async (req, res) => {
  const { auid, role } = req.body;

  try {
    if (auid === "AGS19ABCA072") {
      return res.status(400).json({
        success: false,
        message: "All actions prohibited for this superuser.",
      });
    }
    const user = await User.findOne({ auid });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Not Found in our Database",
      });
    }
    if (req.body.isNew) {
      if (user.role !== "STUDENT") {
        return res.status(400).json({
          success: false,
          message: "This user is already in admin panel.",
        });
      }
    }
    await User.findOneAndUpdate({ auid: auid }, { role: role });
    return res.status(200).json({
      success: true,
      message: `Successfully updated ${auid} to ${role}`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// @desc    - Get all events
// @route   Get /admin/admins
// @access  ADMIN/MODERATOR

const getAllEvents = async (req, res) => {
  const { id } = req.data;
  try {
    const user = await User.findById(id);
    if (user.role === "ADMIN") {
      const events = await Event.find({});
      return res.status(200).json({
        success: true,
        message: "Access Granted",
        data: events,
      });
    }
    if (user.role === "MODERATOR") {
      const events = await Event.find({ organisedBy: user.auid });
      return res.status(200).json({
        success: true,
        message: "Access Granted",
        data: events,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// @desc    - Get all booking events of each user
// @route   POST /users/bookings
// @access  ADMIN


const getSpecifyUserOrder = async (req, res) => {
  const { auid } = req.body;
  try {
    const bookings = await Booking.find({ auid }).populate("event");
    if (bookings.length === 0) {
      return res.status(400).json({
        success: false,
        message: `No orders found for ${auid}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Access Granted",
      data: bookings,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export {
  addEvent,
  getAdminPage,
  getUsersPage,
  getAdminsandModPage,
  removeAdminsAndMods,
  getAllEvents,
  getSpecifyUserOrder,
};
