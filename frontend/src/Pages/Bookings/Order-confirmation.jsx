import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { Buttons } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserEachOrder } from "../../Redux/Actions";
import moment from "moment";
import { Error } from "..";
const OrderConfirmation = () => {
  const { user } = useSelector((state) => state.auth);
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const { loading, success, error, checkout, message } = useSelector(
    (state) => state.checkout
  );
  console.log(checkout);

  useEffect(() => {
    dispatch(fetchUserEachOrder(orderId));
  }, []);
  const { event, paymentDetails } = checkout;
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

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
                    Hi, {user.student_name}. Your booking is {checkout.status}
                  </h5>
                  <p className="mt-3">Your Order ID: {checkout?.orderId}</p>
                </div>
              </Box>
              <Box className="checkout-widget checkout-contact min-h-fit checkout-personal">
                <h5 className="title text-white text-xl font-bold">
                  Your Booking Details
                </h5>
                <form className="checkout-contact-form">
                  <p className="mt-3">
                    Note: We are directly filling all the data to prevent bulk
                    booking. You can't change data.
                  </p>
                </form>
              </Box>
            </div>
            <div className="col-lg-4 summary-mobile">
              <div className="booking-summery bg-one text-white">
                <h4 className="title">booking summary</h4>
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
