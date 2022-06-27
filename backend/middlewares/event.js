import Event from "../models/event.js";
import User from "../models/login.js";
import Checkout from "../models/checkout.js";
import Booking from "../models/bookings.js";

const checkBookingConditions = async (req, res, next) => {
  const { id } = req.data;
  const { name, email, phone, amount, eventId, auid, orderId, checkOutId } = req
    .body?.auid
    ? req.body
    : req.query;

  console.log(req.body);
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

export default checkBookingConditions;
