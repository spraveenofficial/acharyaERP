import Event from "../models/event.js";
import User from "../models/login.js";
import Checkout from "../models/checkout.js";
import Booking from "../models/bookings.js";
// @desc    - Fetch all Events
// @route   POST /api/events
// @access  Public

const fetchEvents = async (req, res) => {
  // Find all the events with status active
  const events = await Event.find({ status: "active" });
  if (!events) {
    return res.status(400).json({
      success: false,
      message: "No events found",
    });
  }

  events.forEach((event) => {
    if (event.eventDate < Date.now() && event.status === "active") {
      event.status = "expired";
      event.save();
    }
  });

  return res.status(200).json({
    success: true,
    data: events,
    message: "Events Fetched Successfully",
  });
};

// @desc    - Fetch Each Event
// @route   GET /api/events/:id
// @access  Public

const fetchEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(400).json({
        success: false,
        message: "Event not found",
      });
    }
    // Get suggested events
    const suggestedEvents = await Event.find({
      $and: [
        { _id: { $ne: event._id } },
        { _id: { $nin: event.suggestedEvents } },
      ],
    }).limit(4);
    return res.status(200).json({
      success: true,
      message: "Event Fetched Successfully",
      data: event,
      suggestedEvents,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Event not found",
    });
  }
};

// @desc    - Initialize Checkout
// @route   POST /api/events/checkout
// @access  Private

const initializeCheckout = async (req, res) => {
  const { id } = req.data;
  const { eventId } = req.body;
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

    // Check if the user have already other checkout pending
    const checkoutIsExist = await Checkout.findOne({
      auid: isUserExist.auid,
    });
    checkoutIsExist && checkoutIsExist.remove();

    // Create a new checkout
    const checkout = new Checkout({
      auid: isUserExist.auid,
      event: event._id,
    });
    await checkout.save();
    return res.status(200).json({
      success: true,
      message: "Checkout initialized successfully",
      data: checkout,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Event not found",
    });
  }
};

// @desc    - Fetch Checkout
// @route   GET /api/events/checkout/:checkOutId
// @access  Private

const fetchCheckout = async (req, res) => {
  const { checkOutId } = req.params;
  // console.log(checkOutId);
  const { id } = req.data;
  try {
    const user = await User.findById(id);
    const checkout = await Checkout.findOne({
      orderId: checkOutId,
      auid: user.auid,
    }).populate("event");
    if (checkout.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Checkout not found",
      });
    }

    if (checkout.isProcessed) {
      return res.status(400).json({
        success: false,
        message: "Checkout already processed",
      });
    }
    // Check if the checkout is expired
    // if (checkout[0].expiry < Date.now()) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Oops, Checkout is expired",
    //   });
    // }
    return res.status(200).json({
      success: true,
      message: "Checkout Fetched Successfully",
      // data: checkout, send all the data in single object and also the populate data
      data: {
        ...checkout.toObject(),
        event: checkout.event,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Checkout not found",
    });
  }
};

const makeFreeOrder = async (req, res) => {
  // const { id } = req.data;
  const { name, email, phone, amount, eventId, auid, orderId } = req.body;
  try {
    const order = new Booking({
      orderId,
      name,
      email,
      phone,
      auid,
      event: eventId,
      status: "confirmed",
      paymentAmount: amount,
      paymentStatus: "paid",
    });
    await order.save();
    return res.status(200).json({
      success: true,
      message: "Event Booked Successfully",
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Event not found",
    });
  }
};

export {
  fetchEvents,
  fetchEvent,
  initializeCheckout,
  fetchCheckout,
  makeFreeOrder,
};
