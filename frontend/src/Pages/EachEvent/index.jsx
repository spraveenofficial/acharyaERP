import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { fetchEvent } from "../../Redux/Actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "..";
const EventPage = () => {
  const dispatch = useDispatch();
  const { loading, event, success } = useSelector((state) => state.event);
  const {
    title,
    category,
    slots,
    description,
    eventDate,
    time,
    thumbnail,
    entryFee,
    id,
  } = event;
  const { eventId } = useParams();

  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  if ((!loading, !event, !success)) {
    return <Error />;
  }
  return (
    <Box className="p-10 mobile:p-4">
      <Box
        _dark={{
          background: "rgba(0, 0, 0, 0.1)",
        }}
        className="text-gray-400 bg-blue-700 body-font overflow-hidden rounded-sm"
      >
        <div className="containe mx-auto desktop:flex">
          <div className="mx-auto flex flex-wrap desktop:p-2 lg:p-2">
            <Image
              maxHeight={"400px"}
              alt="ecommerce"
              className="thumbnail desktop:w-1/2 w-full mobile:h-64 desktop:object-cover mobile:p-5 rounded mobile:w-screen mobile:h-auto"
              src={thumbnail}
            />
            <div className="desktop:w-1/2 text-white w-full desktop:p-10 moblie:mt-0 mt-6 mobile:p-5 lg:p-5 desktop:mt-0">
              <Text className="text-sm title-font tracking-widest uppercase">
                {category}
              </Text>
              <Text className="text-3xl title-font font-medium mb-1">
                {title}
              </Text>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span>{slots} Slots Left</span>
                </span>
                <span className="flex ml-3 pl-2 py-2 border-l-2 border-currentColor-800">
                  Non Refundable.
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-currentColor-800 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl">
                  {entryFee > 0 ? `${entryFee} ₹` : "Free"}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Book Now
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-black ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Text className="my-10 font-extrabold text-3xl font-[Acharya-bold]">
        Suggested Events
      </Text>
    </Box>
  );
};

export { EventPage };