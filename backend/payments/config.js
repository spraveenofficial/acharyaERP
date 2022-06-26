var PaytmConfig = {
  mid: "uskHMG50484262730530",
  key: "uskHMG50484262730530",
  website: "WEBSTAGING",
  industryTypeId: "Retail",
  channelId: "WEB",
  callbackUrl: "http://localhost:3000/api/payment/callback",
  cancelUrl: "http://localhost:3000/api/payment/cancel",
  returnUrl: "http://localhost:3000/api/payment/return",
  environment: "TEST",
  currency: "INR",
  paymentMode: "IMMEDIATEPAY",
  paymentGateway: "PAYTM",
  paymentType: "PAYMENT",
  transactionType: "SALE",
};

export default PaytmConfig;
