import { Box, Spinner, Text, useColorMode } from "@chakra-ui/react";
import { Buttons } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserEachOrder } from "../../Redux/Actions";
import moment from "moment";
import { Error } from "..";
import QRCode from "react-qr-code";
const OrderConfirmation = () => {
  const { user } = useSelector((state) => state.auth);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const { loading, success, error, checkout, message } = useSelector(
    (state) => state.checkout
  );
  useEffect(() => {
    dispatch(fetchUserEachOrder(orderId));
    return () => {
      dispatch({ type: "CLEAR_CHECKOUT" });
    };
  }, []);
  const { event, paymentDetails } = checkout;
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  const fullPaymentModeName = (paymentMode) => {
    switch (paymentMode) {
      case "CARD":
        return "Card";
      case "NB":
        return "Net Banking";
      case "PAYPAL":
        return "Paypal";
      case "WALLET":
        return "Wallet";
      case "UPI":
        return "UPI";
      case "CASH":
        return "Cash";
      default:
        return "Online Payment";
    }
  };

  if (!loading && error && message) {
    return <Error />;
  }
  return (
    success && (
      <div className="movie-facility mt-20 mb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Box className="checkout-widget flex flex-wrap items-center justify-between bg-[#DEE2FF]">
                <div className="title-area">
                  <h5 className="text-white text-xl font-bold capitalize">
                    Thank you, Your booking is {checkout.status}
                  </h5>
                  <p className="mt-3">Your Order ID: {checkout?.orderId}</p>
                </div>
              </Box>
              <Box className="checkout-widget checkout-contact min-h-fit checkout-personal">
                <h5 className="title text-white text-xl font-bold">
                  Personal Details
                </h5>
                <Box className="flex gap-2 flex-col pb-0">
                  <Text>Name: {checkout?.name}</Text>
                  <Text>AUID: {checkout?.auid}</Text>
                  <Text>Email: {checkout?.email}</Text>
                  <Text>Phone: {checkout?.phone}</Text>
                  <Text color={"#fff"} className="font-white">
                    Note: This is strictly inform you that, you should carry
                    your valid College ID card beforehand. If you found breaking
                    rule you will be banned from the event and further action
                    will be taken.
                  </Text>
                </Box>
              </Box>
              <Box className="checkout-widget checkout-contact min-h-fit checkout-personal">
                <h5 className="title text-white text-xl font-bold">
                  Transaction Details
                </h5>
                <Box className="flex gap-2 flex-col pb-0">
                  <Box className="flex justify-between mobile:flex-col mobile:gap-2">
                    <Text>TXN ID: {paymentDetails?.TXNID}</Text>
                    <Text>
                      Date: {moment(paymentDetails?.TXNDATE).format("lll")}
                    </Text>
                  </Box>
                  <Text>
                    Payment Mode: {""}
                    {fullPaymentModeName(paymentDetails?.PAYMENTMODE)}
                  </Text>
                  <Text>
                    Amount: {paymentDetails?.TXNAMOUNT} (Including GST)
                  </Text>
                </Box>
              </Box>
            </div>
            <div className="col-lg-4 summary-mobile">
              <div className="booking-summery bg-one text-white">
                <h4 className="title">booking summary</h4>
                {checkout.status === "confirmed" && (
                  <QRCode
                    size={256}
                    style={{
                      height: "auto",
                      maxWidth: "100%",
                      width: "50%",
                      margin: "auto",
                    }}
                    viewBox={`0 0 256 256`}
                    value="123434"
                    bgColor="#FFFFFF"
                    level="Q"
                    fgColor="#000000"
                  />
                )}
                <ul>
                  <li>
                    <h6 className="subtitle">Event</h6>
                    <span className="info">{event?.title}</span>
                  </li>
                  <li>
                    <h6 className="subtitle">
                      <span>Venue:</span>
                      <span>{event?.venue}</span>
                    </h6>
                    <div className="info">
                      <span>
                        {moment(event?.eventDate).format("LL")} at{" "}
                        {moment(event.timing, "h:mm a").format("h:mm a")}
                      </span>
                    </div>
                  </li>
                  <li>
                    <h6 className="subtitle mb-0">
                      <span>Tickets Price</span>
                      <span>{event?.entryFee} ₹</span>
                    </h6>
                  </li>
                </ul>
                <ul
                  className={`side-shape mobile:hidden ${
                    colorMode === "dark"
                      ? "after:bg-[#1a202c] before:bg-[#1a202c]"
                      : "after:bg-white before:bg-white"
                  }`}
                >
                  <li>
                    <h6 className="subtitle">
                      <span>combos</span>
                      <span>57 ₹</span>
                    </h6>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                    </span>
                  </li>
                  <li>
                    <h6 className="subtitle">
                      <span>food &amp; bevarage</span>
                    </h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="info">
                      <span>price</span>
                      <span>0₹</span>
                    </span>
                    <span className="info">
                      <span>gst (16%)</span>
                      <span>0 ₹</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export { OrderConfirmation };
