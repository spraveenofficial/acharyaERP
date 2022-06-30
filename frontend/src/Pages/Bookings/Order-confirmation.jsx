import { useParams } from "react-router-dom";

const OrderConfirmation = () => {
  const { orderId } = useParams();
  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order! {orderId}</p>
    </div>
  );
};

export { OrderConfirmation };
