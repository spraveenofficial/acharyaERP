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
      data: {
        ...event.toObject(),
        suggestedEvents,
      },
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
    const event = await Event.findById(eventId);
    // Check if the user have already other checkout pending
    const checkoutIsExist = await Checkout.findOne({
      auid: isUserExist.auid,
    });

    checkoutIsExist && checkoutIsExist.remove();

    // Create a new checkout
    const checkout = new Checkout({
      auid: isUserExist.auid,
      event: event._id,
      isProcessed: false,
      expiry: Date.now() + 60000,
    });
    await checkout.save();
    return res.status(200).json({
      success: true,
      message: "Checkout initialized successfully",
      data: checkout,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went Wrong, Please Try again Later.",
    });
  }
};

// @desc    - Fetch Checkout
// @route   GET /api/events/checkout/:checkOutId
// @access  Private

const fetchCheckout = async (req, res) => {
  const { checkoutId } = req.params;
  const { id } = req.data;
  try {
    const user = await User.findById(id);
    const checkout = await Checkout.findOne({
      orderId: checkoutId,
      auid: user.auid,
    }).populate("event");

    if (!checkout) {
      return res.status(400).json({
        success: false,
        message: "Checkout not found, testing",
      });
    }

    if (checkout.isProcessed) {
      return res.status(400).json({
        success: false,
        message: "Checkout already processed",
      });
    }

    // Check if the checkout is expired
    if (checkout.expiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "Oops, Checkout is expired",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Checkout Fetched Successfully",
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
      paymentDetails: {
        amount,
        paymentMethod: "free",
        paymentStatus: "success",
      },
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
      message: "Something Went Wrong While Booking. Please Try Again Later",
    });
  }
};

const fetchUserEachOrder = async (req, res) => {
  const { id } = req.data;
  const { orderId } = req.params;
  try {
    const user = await User.findById(id);
    const event = await Booking.findOne({
      orderId,
      auid: user.auid,
    }).populate("event");
    if (!event) {
      return res.status(400).json({
        success: false,
        message: "Order not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Order Fetched Successfully",
      data: event,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Order not found",
    });
  }
};

const fetchUserAllOrders = async (req, res) => {
  const { id } = req.data;
  try {
    const user = await User.findById(id);
    const events = await Booking.find({
      auid: user.auid,
    })
      .populate("event")
      .sort({ createdAt: -1 });
    if (!events) {
      return res.status(400).json({
        success: false,
        message: "No orders found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Orders Fetched Successfully",
      data: events,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "No orders found",
    });
  }
};

export {
  fetchEvents,
  fetchEvent,
  initializeCheckout,
  fetchCheckout,
  makeFreeOrder,
  fetchUserEachOrder,
  fetchUserAllOrders,
};
