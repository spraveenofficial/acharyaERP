import { v4 as uuid } from "uuid";
// var PaytmConfig = {
//   MID: "uskHMG50484262730530",
//   KEY: "fae9&hRetCOg_fw0",
//   WEBSITE: "WEBSTAGING",
//   INDUSTRY_TYPE_ID: "Retail",
//   CHANNEL_ID: "WEB",
//   CALLBACK_URL: "http://localhost:3000/api/payment/callback",
// };

let paytmParams = {};
(paytmParams["MID"] = "uskHMG50484262730530"),
  (paytmParams["WEBSITE"] = "WEBSTAGING"),
  (paytmParams["CHANNEL_ID"] = "WEB"),
  (paytmParams["INDUSTRY_TYPE_ID"] = "Retail"),
  (paytmParams["ORDER_ID"] = "hRetCOg_fw0"),
  (paytmParams["CUST_ID"] = 12345),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback");
paytmParams["EMAIL"] = "codeforinterview01@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";

export default paytmParams;
// export default PaytmConfig;
