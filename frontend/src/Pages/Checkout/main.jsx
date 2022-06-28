import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
const CheckoutMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, success, error, checkout, message } = useSelector(
    (state) => state.checkout
  );
  useEffect(() => {
    if (success) {
      navigate(`/checkout/${checkout.orderId}`);
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
    error && (
      <Box
        textAlign="center"
        height={500}
        className="flex flex-col justify-center text-center items-center"
        py={10}
        px={6}
      >
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"red.500"}
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <CloseIcon boxSize={"20px"} color={"white"} />
          </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Oops, Something Went Wrong
        </Heading>
        <Text color={"gray.500"}>{message}</Text>
      </Box>
    )
  );
};

export { CheckoutMain };
