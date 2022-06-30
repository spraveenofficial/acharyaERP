// import PaytmChecksum from "../payments/checksum.js";
import Event from "../models/event.js";
import paytmParams from "../payments/config.js";
// import formidable from "formidable";
import https from "https";
import PaytmCheckSum from "../payments/checkSums.js";

const makePayment = async (req, res) => {
  const { name, email, phone, amount, eventId, auid, orderId } = req.query;
  try {
    PaytmCheckSum.generateSignature(
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
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Payment initialization failed",
    });
  }
};

const verifyPayment = async (request, response) => {
  let paytmCheckSum = request.body.CHECKSUMHASH;
  var isVerifySignature = PaytmCheckSum.verifySignature(
    request.body,
    "fae9&hRetCOg_fw0",
    paytmCheckSum
  );
  if (isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDERID"] = request.body.ORDERID;

    PaytmCheckSum.generateSignature(
      paytmParams,
      "fae9&hRetCOg_fw0",
      function (checksum) {
        var post_data = JSON.stringify(paytmParams);

        var options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
          },
        };

        var res = "";
        var post_req = https.request(options, function (post_res) {
          console.log("Response Code : " + post_res);
          post_res.on("data", function (chunk) {
            res += chunk;
          });

          post_res.on("end", function () {
            let result = JSON.parse(res);
            // response.redirect(`http://localhost:3000/`);
            response.json({
              success: true,
              message: "Payment success",
              data: result,
            });
          });
        });
        post_req.write(post_data);
        post_req.end();
      }
    );
  } else {
    return response.status(400).json({
      success: true,
      message: "Checksum Mismatched",
      data: request.body,
    });
  }
};

export { makePayment, verifyPayment };
