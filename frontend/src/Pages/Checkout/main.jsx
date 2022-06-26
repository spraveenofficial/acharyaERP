import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutMain = () => {
  const navigate = useNavigate();
  const { loading, success, error, checkout } = useSelector(
    (state) => state.checkout
  );
  useEffect(() => {
    if (success) {
      navigate(`/checkout/${checkout?.orderId}`);
    }
  }, [success, checkout]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export { CheckoutMain };
