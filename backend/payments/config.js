const paytmParams = (orderId, email, phone, amount, auid) => {
  return {
    MID: "uskHMG50484262730530",
    ORDER_ID: orderId,
    CUST_ID: auid,
    INDUSTRY_TYPE_ID: "Retail",
    CHANNEL_ID: "WEB",
    TXN_AMOUNT: amount,
    WEBSITE: "WEBSTAGING",
    CALLBACK_URL: "http://localhost:3000/events",
    EMAIL: email,
    MOBILE_NO: phone,
    // CUST_NAME: name,
  };
};

// let paytmParams = {};
// (paytmParams["MID"] = "uskHMG50484262730530"),
//   (paytmParams["WEBSITE"] = "WEBSTAGING"),
//   (paytmParams["CHANNEL_ID"] = "WEB"),
//   (paytmParams["INDUSTRY_TYPE_ID"] = "Retail"),
//   (paytmParams["ORDER_ID"] = "hRetCOg_fffw0"),
//   (paytmParams["CUST_ID"] = 12345),
//   (paytmParams["TXN_AMOUNT"] = "100"),
//   (paytmParams["CALLBACK_URL"] = "http://localhost:3000/events");
// paytmParams["EMAIL"] = "codeforinterview01@gmail.com";
// paytmParams["MOBILE_NO"] = "1234567852";

export default paytmParams;
// export default PaytmConfig;
