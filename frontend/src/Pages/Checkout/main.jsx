import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, success, error, checkout } = useSelector(
    (state) => state.checkout
  );
  useEffect(() => {
    if (success) {
      navigate(`/checkout/${checkout?.orderId}`);
    }
  }, [success]);

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_CHECKOUT" });
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">
          Please hang on, we are proceeding your order.
        </h1>
        <p className="text-center text-gray-600">
          Please confirm your details and proceed to payment.
        </p>
      </div>
    </div>
  );
};

export { CheckoutMain };
