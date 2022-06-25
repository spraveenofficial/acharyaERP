import "./style.css";
import { Box, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Buttons } from "../Button";
const Checkout = () => {
  return (
    <div className="movie-facility mt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="checkout-widget flex flex-wrap items-center justify-between">
              <div className="title-area">
                <h5 className="title text-xl font-bold">
                  Already a Boleto Member?
                </h5>
                <p>Sign in to earn points and make booking easier!</p>
              </div>
              <a href="#0" className="sign-in-area">
                <i className="fas fa-user" />
                <span>Sign in</span>
              </a>
            </div>
            <div className="checkout-widget checkout-contact min-h-fit checkout-personal">
              <h5 className="title text-xl font-bold">
                Share your Contact Details
              </h5>
              <form className="checkout-contact-form">
                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="title">Enter Event Title</FormLabel>
                  <Input
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Event Title"
                  />
                </FormControl>
                <Box className="flex justify-between w-full gap-4 mobile:flex-col mt-4 mb-5 mobile:gap-0">
                  <FormControl isInvalid={false}>
                    <FormLabel htmlFor="title">Enter Event Title</FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="Event Title"
                    />
                  </FormControl>
                  <FormControl isInvalid={false}>
                    <FormLabel htmlFor="title">Enter Event Title</FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="Event Title"
                    />
                  </FormControl>
                </Box>
                <Buttons className="mt-3">Proceed</Buttons>
              </form>
            </div>
            <div className="checkout-widget checkout-contact checkout-personal">
              <h5 className="title text-xl font-bold">Promo Code</h5>
              <form className="checkout-contact-form ">
                <Flex gap={5} className="items-center w-full">
                  <Input placeholder="Enter Promo Code" width="70%" />
                  <Buttons className="w-11">Apply</Buttons>
                </Flex>
              </form>
            </div>
            <div className="checkout-widget checkout-contact checkout-card mb-0">
              <h5 className="title text-xl font-bold">Payment Option</h5>
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
              <h6 className="text-bold text-center text-2xl mb-4 uppercase font-[Acharya-bold]">
                Enter Your Card Details
              </h6>
              <form className="payment-card-form">
                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="title">Enter Card Holder Name</FormLabel>
                  <Input
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Event Title"
                    height="50px"
                  />
                </FormControl>
                <FormControl mt={4} isInvalid={false}>
                  <FormLabel htmlFor="title">Enter Card Number</FormLabel>
                  <Input
                    id="title"
                    type="title"
                    name="title"
                    placeholder="Enter Card Number"
                    height="50px"
                  />
                </FormControl>
                <Flex gap={5} mt={4} className="items-center w-full">
                  <FormControl isInvalid={false}>
                    <FormLabel htmlFor="title">Enter Expiry Date</FormLabel>
                    <Input
                      id="title"
                      type="title"
                      name="title"
                      placeholder="MM/YY"
                      height="50px"
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
                <div className="form-group check-group">
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
            <div className="booking-summery bg-one">
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
            <div className="proceed-area text-center">
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
