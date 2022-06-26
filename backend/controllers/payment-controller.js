import PaytmChecksum from "../payments/checksum.js";
import PaytmConfig from "../payments/config.js";
const makePayment = async (req, res) => {
  const { name, email, phone, amount, eventId, auid, orderId } = req.body;
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

  // Make payment
  //   const payment = new Payment({
  //     amount,
  //     email,
  //     firstName,
  //     lastName,
  //     phone,
  //     eventId,
  //     eventName,
  //     eventDate,
  //     eventTime,
  //     eventLocation,
  //     eventDescription,
  //     eventImage,
  //   });
  //   await payment.save();
  const paytmParams = {
    MID: PaytmConfig.mid,
    WEBSITE: PaytmConfig.website,
    INDUSTRY_TYPE_ID: PaytmConfig.industryTypeId,
    CHANNEL_ID: PaytmConfig.channelId,
    ORDER_ID: orderId,
    CUST_ID: auid,
    TXN_AMOUNT: amount,
    EMAIL: email,
    MOBILE_NO: phone,
    CALLBACK_URL: PaytmConfig.callbackUrl,
    CHECKSUMHASH: "",
  };
  const paytmChecksum = PaytmChecksum.generateSignature(paytmParams);
  return res.status(200).json({
    success: true,
    message: "Payment initialized successfully",
    data: {
      payment,
      paytmParams,
      paytmChecksum,
    },
  });
};

export { makePayment };
