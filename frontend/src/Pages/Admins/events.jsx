import {
  Box,
  Button,
  Image,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, SideBar } from "../../Components";
import { fetchEventsForAdmin } from "../../Redux/Actions";
import { BookingStatus } from "./Components/Bookings/status";

const AdminEvents = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, success, data, error, message } = useSelector(
    (state) => state.adminuser
  );
  useEffect(() => {
    dispatch(fetchEventsForAdmin());
  }, []);

  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <Helmet>
        <title>Events Dashboard - Acharya ERP</title>
        <meta name="description" content="This is the home page." />
      </Helmet>
      <SideBar>
        <Box className="p-5 mobile:p-3">
          <Box mb={2} className="flex justify-between items-center w-full">
            <Text fontSize="2xl" fontWeight="extrabold">
              Events
            </Text>
            <Button onClick={() => navigate("/admin/add-event")}>
              Add Event
            </Button>
          </Box>
          {loading && (
            <div className="flex justify-center items-center min-h-screen">
              <Spinner size="xl" />
            </div>
          )}
          {error && (
            <ErrorMessage
              message={message}
              submessage={"Oops, Something went Wrong."}
            />
          )}
          {!loading &&
            success &&
            data?.map((event) => {
              return (
                <div
                  key={event.id}
                  className="mb-5 flex shadow-md cursor-pointer w-full duration-300 mobile:flex-col mobile:relative"
                >
                  <div className="inline group h-48 w-70 md:min-w-fit">
                    <Image
                      className="rounded-t object-cover h-48 w-72 mobile:w-full"
                      src={event.thumbnail}
                      alt="Product Preview"
                    />
                  </div>
                  <div className="flex flex-col rounded-b p-3 w-4/5">
                    <div className="text-xl font-bold font-[Acharya-bold] truncate">
                      {event.title}
                    </div>
                    <div className="text-xxs text-gray-400 truncate mt-1">
                      by AGS19ABCA072 in Acharya Habba Category
                    </div>
                    <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                      $23
                    </div>
                    <div className="flex flex-row mt-2">
                      <div className="flex flex-col flex-auto">
                        {/* Statistic */}
                        <div
                          className="text-xxs text-gray-400 mt-1"
                          title="34k Downlaods in this year"
                        >
                          34k Downloads
                        </div>
                      </div>
                      {/* Button Column */}
                      <div className="flex flex-row flex-auto justify-end">
                        {/* Cart Button */}
                        <a
                          className="flex text-xs border px-3 my-auto py-2 mr-2
                                border-amber-500 group hover:bg-amber-500 
                                rounded-xss
                                transition-all duration-200"
                        >
                          {/* Icon */}
                          <i
                            className="mdi mdi-cart-outline text-amber-700
                                    group-hover:text-white delay-100"
                          />
                        </a>
                        {/* Preview Link Button */}
                        <a
                          className="flex text-xs border px-3 my-auto py-2 
                                border-amber-500 group hover:bg-amber-500 
                                rounded-xss
                                transition-all duration-200"
                        >
                          {/* Icon */}
                          <i
                            className="mdi mdi-eye-outline text-amber-700
                                    group-hover:text-white delay-100"
                          />
                          {/* Text */}
                          <div
                            className="text-xxs text-amber-700 font-semibold ml-2
                                    group-hover:text-white delay-100"
                          >
                            Live Preview
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <BookingStatus status={event.status} />
                </div>
              );
            })}
        </Box>
      </SideBar>
    </Box>
  );
};

export { AdminEvents };
