import { Box, Text } from "@chakra-ui/react";
import moment from "moment";
const EventCard = (props) => {
  const { title, category, slots, eventDate, time, thumbnail, entryFee } =
    props.event;
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg pointer mobile:min-w-full">
      {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">
        Beginner Friendly
      </h3> */}
      <div className="relative">
        <img className="w-full rounded-xl" src={thumbnail} alt="Colors" />
        <p className="uppercase absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
          {category}
        </p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {title}
      </h1>
      <div className="my-4">
        <Box
          _dark={{
            color: "black",
          }}
          className="flex gap-2 items-center text-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <Text className="font-extrabold">
            {moment(eventDate).format("LL")}
          </Text>
        </Box>
        <Box
          _dark={{
            color: "black",
          }}
          className="flex space-x-1 items-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>
          <p>{slots} Left</p>
        </Box>
        <Box
          _dark={{
            color: "black",
          }}
          className="flex space-x-1 items-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 mb-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </span>
          <Text>{entryFee} ₹</Text>
        </Box>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export { EventCard };
