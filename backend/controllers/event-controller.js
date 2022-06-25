import Event from "../models/event.js";

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

export { fetchEvents, fetchEvent };
