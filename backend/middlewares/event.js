import Event from "../models/event.js";
import User from "../models/login.js";
import Checkout from "../models/checkout.js";
import Booking from "../models/bookings.js";

const checkBookingConditions = async (req, res, next) => {
  const { id } = req.data;
  console.log("fnefbiun");
  const { name, email, phone, amount, eventId, auid, orderId, checkOutId } = req
    .body?.auid
    ? req.body
    : req.query;
  try {
    const isUserExist = await User.findById(id);
    if (!isUserExist) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (isUserExist.auid !== auid) {
      return res.status(400).json({
        success: false,
        message: "AUID mismatched",
      });
    }

    const event = await Event.findById(eventId);
    if (event === null) {
      return res.status(400).json({
        success: false,
        message: "Event not found",
      });
    }
    // event.slots -= 1;
    // event.save();

    // Check if event have slot available
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

    // Check if the user have booked this event
    const booking = await Booking.findOne({
      user: isUserExist._id,
      event: event._id,
    });

    console.log(booking);

    if (booking) {
      return res.status(400).json({
        success: false,
        message: "You have already booked this event",
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
      const tax = entryFee * 0.16;
      const total = entryFee + tax;
      return { entryFee, tax, total };
    };

    if (generateBill().total !== parseFloat(amount)) {
      return res.status(400).json({
        success: false,
        message: "Amount does not match",
      });
    }
    // Make purchase order
    next();
  } catch (error) {
    console.log(error);
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
    const booking = await Booking.find({
      auid: isUserExist.auid,
      event: event._id,
    });
    if (booking.length > 0) {
      booking.forEach((book) => {
        if (book.status === "confirmed") {
          return res.status(400).json({
            success: false,
            message: "You have already booked this event",
          });
        }
        if (book.status === "pending") {
          return res.status(400).json({
            success: false,
            message: "You have already booked this event, Its pending.",
          });
        }
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
