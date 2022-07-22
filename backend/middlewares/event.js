import Event from "../models/event.js";
import User from "../models/login.js";
import Checkout from "../models/checkout.js";
import Booking from "../models/bookings.js";

const checkBookingConditions = async (req, res, next) => {
  const { id } = req.data;
  const { amount, eventId, checkOutId } = req.body?.auid ? req.body : req.query;
  try {
    const isUserExist = await User.findById(id);
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const event = await Event.findById(eventId);
    if (event === null) {
      return res.status(400).json({
        success: false,
        message: "Event not found",
      });
    }

    if (event.slots === 0) {
      return res.status(400).json({
        success: false,
        message: "Oops, No slots available",
      });
    }

    // Check if event is expired
    if (event.eventDate < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Oops, Event is expired",
      });
    }

    // Check the valid checkOutId
    const checkOut = await Checkout.findById(checkOutId);
    if (checkOut === null) {
      return res.status(400).json({
        success: false,
        message: "Checkout not found",
      });
    }
    if (isUserExist.auid !== checkOut.auid) {
      return res.status(400).json({
        success: false,
        message: "AUID mismatched",
      });
    }
    // Check if the user have booked this event
    const booking = await Booking.find({
      auid: isUserExist.auid,
      event: event._id,
      status: { $in: ["pending", "confirmed"] },
    });
    console.log(booking);
    if (booking.length > 0) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this event.",
      });
    }

    if (checkOut.isProcessed) {
      return res.status(400).json({
        success: false,
        message: "Checkout already processed",
      });
    }

    if (checkOut.expiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Oops, Checkout is expired",
      });
    }
    checkOut.isProcessed = true;
    await checkOut.save();

    const generateBill = () => {
      const entryFee = event.entryFee;
      if (entryFee === 0) {
        return { entryFee: 0, total: 0, tax: 0 };
      }
      const tax = 0;
      const total = entryFee + tax;
      return { entryFee, tax, total };
    };

    if (generateBill().total !== parseFloat(amount)) {
      return res.status(400).json({
        success: false,
        message: "Amount does not match",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Event not found",
    });
  }
};

const checkOutConditions = async (req, res, next) => {
  const { id } = req.data;
  const { eventId } = req.body;
  const isUserExist = await User.findById(id);
  const event = await Event.findById(eventId);
  try {
    if (event === null) {
      return res.status(400).json({
        success: false,
        message: "Event not found",
      });
    }
    const booking = await Booking.find({
      auid: isUserExist.auid,
      event: event._id,
      status: { $in: ["pending", "confirmed", "completed"] },
    });
    if (booking.length > 0) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this event.",
      });
    }
    if (event.slots === 0) {
      return res.status(400).json({
        success: false,
        message: "Oops, No slots available",
      });
    }
    if (event.eventDate < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Oops, Event is expired",
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went Wrong. Please try again Later",
    });
  }
};

export { checkBookingConditions, checkOutConditions };
