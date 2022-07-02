import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./style.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMyOrders } from "../../Redux/Actions";
import { LoadingOrderCard } from "../../Components";
import { CloseIcon } from "@chakra-ui/icons";

const MyBookings = () => {
  const dispatch = useDispatch();
  const { loading, error, bookings, message } = useSelector(
    (state) => state.myBookings
  );
  useEffect(() => {
    dispatch(fetchMyOrders());
  }, []);
  function Item(props) {
    const { event, paymentDetails } = props.event;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
      <motion.li
        layout
        onClick={toggleOpen}
        className="relative"
        initial={{ borderRadius: 10 }}
      >
        <Box className="flex items-center">
          {/* <motion.div className="avatar" layout /> */}
          <Text className="text-xl font-bold font-[Acharya-semi] ml-4">
            {event.title}
          </Text>
          <Text
            className={`absolute font-bold top-0 right-0 p-2 rounded-xl uppercase text-xs ${
              props.event.status === "confirmed"
                ? "bg-green-500"
                : props.event.status === "failed"
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          >
            {props.event.status}
          </Text>
        </Box>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }

  function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="rows" />
        <div className="rows" />
        <div className="rows" />
      </motion.div>
    );
  }
  return (
    <Box className="w-full p-10 mobile:p-4 flex justify-center">
      <Box
        _dark={{
          bg: "#23314d",
        }}
        className="w-3/4 mobile:w-full bg-[#DEE2FF] table-data rounded-md lg:w-4/5"
      >
        <Text className="text-2xl font-bold text-center mt-5">My Bookings</Text>
        <AnimateSharedLayout>
          <motion.ul layout initial={{ borderRadius: 25 }}>
            {loading ? (
              <LoadingOrderCard />
            ) : (
              <>
                {(!loading && error) ||
                  (bookings.length === 0 && (
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
                        {bookings.length === 0 ? "No Bookings found" : message}
                      </Heading>
                    </Box>
                  ))}
                {bookings?.map((event) => {
                  return <Item key={event.event.id} event={event} />;
                })}
              </>
            )}
          </motion.ul>
        </AnimateSharedLayout>
      </Box>
    </Box>
  );
};

export { MyBookings };
