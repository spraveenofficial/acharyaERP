import Event from "../models/event.js";
import User from "../models/login.js";
import Checkout from "../models/checkout.js";
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

export { fetchEvents, fetchEvent, initializeCheckout };
