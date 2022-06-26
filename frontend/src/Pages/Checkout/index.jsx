import "./style.css";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { Buttons } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheckout } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Error } from "..";
const Checkout = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { checkOutId } = useParams();
  const { loading, success, error, checkout, message } = useSelector(
    (state) => state.checkout
  );
  console.log(error);
  useEffect(() => {
    dispatch(fetchCheckout(checkOutId));
  }, []);

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
    <div className="movie-facility mt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Box className="checkout-widget flex flex-wrap items-center justify-between bg-[#DEE2FF]">
              <div className="title-area">
                <h5 className="text-white text-xl font-bold">
                  Hi, {user.student_name}. Your order is being processed.
                </h5>
                <p className="mt-3">You have 10 minute to proceed.</p>
              </div>
            </Box>
            <Box className="checkout-widget checkout-contact min-h-fit checkout-personal">
              <h5 className="title text-white text-xl font-bold">
                Your Contact Details
              </h5>
              <form className="checkout-contact-form">
                <FormControl isInvalid={false}>
                  <FormLabel className="text-white" htmlFor="title">
                    Your Full Name
                  </FormLabel>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    className="text-white"
                    value={user.student_name}
                    disabled
                  />
                </FormControl>
                <Box className="flex justify-between w-full gap-4 mobile:flex-col mt-4 mb-5 mobile:gap-0">
                  <FormControl isInvalid={false}>
                    <FormLabel className="text-white" htmlFor="title">
                      Your Email Id
                    </FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="Event Title"
                      className="text-white"
                      value={user?.acerp_email}
                      disabled
                    />
                  </FormControl>
                  <FormControl isInvalid={false}>
                    <FormLabel className="text-white" htmlFor="title">
                      Your Contact No.
                    </FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="Event Title"
                      className="text-white"
                      value={user?.mobile}
                    />
                  </FormControl>
                </Box>
                <p className="mt-3">
                  Note: We are directly filling all the data to prevent bulk
                  booking. You can't change data.
                </p>
              </form>
            </Box>
            <Box className="checkout-widget checkout-contact checkout-personal">
              <h5 className="title text-white text-xl font-bold">Promo Code</h5>
              <form className="checkout-contact-form ">
                <Flex gap={5} className="items-center w-full">
                  <Input
                    className="text-white"
                    placeholder="Enter Promo Code"
                    width="70%"
                  />
                  <Buttons className="w-11">Apply</Buttons>
                </Flex>
              </form>
            </Box>
            <div className="checkout-widget checkout-contact checkout-card mb-0">
              <h5 className="title text-xl text-white font-bold">
                Payment Option
              </h5>
              <ul className="payment-option">
                <li className="active">
                  <a href="#0">
                    <img src="./assets/images/payment/card.png" alt="payment" />
                    <span>Credit Card</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./assets/images/payment/card.png" alt="payment" />
                    <span>Debit Card</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img
                      src="./assets/images/payment/paypal.png"
                      alt="payment"
                    />
                    <span>paypal</span>
                  </a>
                </li>
              </ul>
              <h6 className="text-bold text-center text-white text-2xl mb-4 uppercase font-[Acharya-bold]">
                Enter Your Card Details
              </h6>
              <form className="payment-card-form">
                <FormControl isInvalid={false}>
                  <FormLabel className="text-white" htmlFor="title">
                    Enter Card Holder Name
                  </FormLabel>
                  <Input
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Event Title"
                    height="50px"
                    className="text-white"
                  />
                </FormControl>
                <FormControl mt={4} isInvalid={false}>
                  <FormLabel className="text-white" htmlFor="title">
                    Enter Card Number
                  </FormLabel>
                  <Input
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Enter Card Number"
                    height="50px"
                    className="text-white"
                  />
                </FormControl>
                <Flex gap={5} mt={4} className="items-center w-full text-white">
                  <FormControl isInvalid={false}>
                    <FormLabel className="text-white" htmlFor="title">
                      Enter Expiry Date
                    </FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="MM/YY"
                      height="50px"
                      className="text-white"
                    />
                  </FormControl>
                  <FormControl isInvalid={false}>
                    <FormLabel htmlFor="title">Enter CVV</FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="CVV"
                      height="50px"
                    />
                  </FormControl>
                </Flex>
                <div className="form-group check-group text-white">
                  <input id="card5" type="checkbox" defaultChecked />
                  <label htmlFor="card5">
                    <span className="title">QuickPay</span>
                    <span className="info">
                      Save this card information to my Boleto account and make
                      faster payments.
                    </span>
                  </label>
                </div>
                <Buttons className="mt-3 mb-3">Proceed</Buttons>
              </form>
              <p className="notice">
                By Clicking "Make Payment" you agree to the
                <a href="#0">terms and conditions</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 summary-mobile">
            <div className="booking-summery bg-one text-white">
              <h4 className="title">booking summary</h4>
              <ul>
                <li>
                  <h6 className="subtitle">Venus</h6>
                  <span className="info">English-2d</span>
                </li>
                <li>
                  <h6 className="subtitle">
                    <span>City Walk</span>
                    <span>02</span>
                  </h6>
                  <div className="info">
                    <span>10 SEP TUE, 11:00 PM</span> <span>Tickets</span>
                  </div>
                </li>
                <li>
                  <h6 className="subtitle mb-0">
                    <span>Tickets Price</span>
                    <span>$150</span>
                  </h6>
                </li>
              </ul>
              <ul className="side-shape mobile:hidden">
                <li>
                  <h6 className="subtitle">
                    <span>combos</span>
                    <span>$57</span>
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
                    <span>$207</span>
                  </span>
                  <span className="info">
                    <span>vat</span>
                    <span>$15</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="proceed-area text-center text-white">
              <h6 className="subtitle">
                <span>Amount Payable</span>
                <span>$222</span>
              </h6>
              <Buttons>Proceed to Pay</Buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Checkout };
