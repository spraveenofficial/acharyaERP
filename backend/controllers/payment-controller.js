import PaytmChecksum from "../payments/checksum.js";
import Event from "../models/event.js";
import paytmParams from "../payments/config.js";

const makePayment = async (req, res) => {
  const { name, email, phone, amount, eventId, auid, orderId } = req.query;
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

  try {
    var paymentDetails = {
      amount: amount,
      customerId: eventId,
      customerEmail: email,
      customerPhone: phone,
      customerName: name,
    };
    if (
      !paymentDetails.amount ||
      !paymentDetails.customerId ||
      !paymentDetails.customerEmail ||
      !paymentDetails.customerPhone
    ) {
      res.status(400).send("Payment failed");
    } else {
      PaytmChecksum.genchecksum(
        paytmParams(orderId, email, phone, amount, auid),
        "fae9&hRetCOg_fw0",
        function (err, checksum) {
          var params = {
            ...paytmParams(orderId, email, phone, amount, auid),
            CHECKSUMHASH: checksum,
          };
          res.json({
            success: true,
            message: "Payment proceed",
            data: params,
          });
        }
      );
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Payment initialization failed",
    });
  }
};

export { makePayment };
