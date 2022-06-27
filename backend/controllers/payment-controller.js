import PaytmChecksum from "../payments/checksum.js";
import Event from "../models/event.js";
import paytmParams from "../payments/config.js";

const makePayment = async (req, res) => {
  const { name, email, phone, amount, eventId, auid, orderId } = req.query;
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
