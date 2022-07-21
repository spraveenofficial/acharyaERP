import {
  Box,
  Button,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ButtonQuickAction, ErrorMessage, SideBar } from "../../Components";
import { ViewBookings } from "./Components/Bookings/steps";
import { fetchEventsForAdmin, removeAdminOrMods } from "../../Redux/Actions";
import moment from "moment";
import { itemsForUserMenu as Menu } from "./Utils/menus";
const AdminEvents = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [clicked, setClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, success, data, error, message } = useSelector(
    (state) => state.admin
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
        {!loading && !error && success && (
          <Box className="p-5 mobile:p-3">
            <Text fontSize="2xl" fontWeight="extrabold">
              Events
            </Text>
            <div className="flex shadow-md cursor-pointer w-full duration-300 mobile:flex-col">
              {/* Preview */}
              <div className="inline group h-48 w-70 md:min-w-fit">
                <img
                  className="rounded-t object-cover h-full w-full"
                  src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=1170&q=80"
                  alt="Product Preview"
                />
              </div>
              {/* Body */}
              <div className="flex flex-col rounded-b p-3">
                {/* Title */}
                <div className="text-xl font-bold font-[Acharya-bold] truncate dark:text-red-200">
                  Events Name 1
                </div>
                {/* Author - Category */}
                <div className="text-xxs text-gray-400 truncate mt-1">
                  by AGS19ABCA072 in Acharya Habba Category
                </div>
                {/* Price */}
                <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                  $23
                </div>
                {/* Body */}
                <div className="flex flex-row mt-2">
                  {/* Detail Column */}
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
            </div>
          </Box>
        )}
      </SideBar>
    </Box>
  );
};

export { AdminEvents };
