import PaytmChecksum from "../payments/checksum.js";
import Event from "../models/event.js";
import paytmParams from "../payments/config.js";
import formidable from "formidable";
import https from "https";

// Get all the functions of PaytmChecksums
// const PaytmChecksum = new PaytmChecksums()

console.log(PaytmChecksum);
const makePayment = async (req, res) => {
  const { name, email, phone, amount, eventId, auid, orderId } = req.query;
  try {
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
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Payment initialization failed",
    });
  }
};

const verifyPayment = async (request, response) => {
  const form = new formidable.IncomingForm();
  console.log("verifyPayment", request.body);
  let paytmCheckSum = request.body.CHECKSUMHASH;
  // delete request.body.CHECKSUMHASH;
  var isVerifySignature = PaytmChecksum.verifychecksum(
    request.body,
    "fae9&hRetCOg_fw0",
    paytmCheckSum
  );
  console.log(isVerifySignature);
  if (isVerifySignature) {
    var paytmParams = {};
    paytmParams["MID"] = request.body.MID;
    paytmParams["ORDERID"] = request.body.ORDERID;

    paytmchecksum
      .genchecksum(paytmParams, "fae9&hRetCOg_fw0")
      .then(function (checksum) {
        paytmParams["CHECKSUMHASH"] = checksum;

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
          post_res.on("data", function (chunk) {
            res += chunk;
          });

          post_res.on("end", function () {
            let result = JSON.parse(res);
            // response.redirect(`http://localhost:3000/`)
            response.status(200).json({
              success: true,
              message: "Payment verified",
              data: result,
            });
          });
        });
        // post_req.write(post_data);
        // post_req.end();
        return response.status(200).json({
          success: true,
          message: "Payment verified 2",
          data: post_data,
        });
      });
  } else {
    // console.log("Checksum Mismatched");
    return response.status(200).json({
      success: true,
      message: "Checksum Mismatched",
    });
  }
};

export { makePayment, verifyPayment };
