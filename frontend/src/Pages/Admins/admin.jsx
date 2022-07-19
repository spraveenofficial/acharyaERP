import { Box, Spinner, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessage,
  SideBar,
  CalendarIcon,
  ProfileIcon,
  PaymentIcon,
  SuperProfileIcon,
} from "../../Components";
import { StatsCard } from "./Components/Cards";
import { fetchAdminPage } from "../../Redux/Actions";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Icon } from "@chakra-ui/react";
const Admin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading, error, data, success, message } = useSelector(
    (state) => state.admin
  );
  const { cardsOfHome } = data;
  const { student_name: name } = user;
  const today = new Date();
  const curHr = today.getHours();
  useEffect(() => {
    if (!success) {
      dispatch(fetchAdminPage());
    }
  }, []);

  const renderIcon = (name) => {
    switch (name) {
      case "BsCalendar3EventFill":
        return (
          <Icon
            as={CalendarIcon}
            w={{ base: 10, md: 8, xl: 9 }}
            h={{ base: 10, md: 8, xl: 9 }}
          />
        );
      case "FaUserGraduate":
        return (
          <Icon
            as={ProfileIcon}
            w={{ base: 10, md: 8, xl: 9 }}
            h={{ base: 10, md: 8, xl: 9 }}
          />
          // ""
        );
      case "FaRupeeSign":
        return (
          <Icon
            as={PaymentIcon}
            w={{ base: 10, md: 8, xl: 9 }}
            h={{ base: 10, md: 8, xl: 9 }}
          />
        );
      case "FaUserNurse":
        return (
          <Icon
            as={SuperProfileIcon}
            w={{ base: 10, md: 8, xl: 9 }}
            h={{ base: 10, md: 8, xl: 9 }}
          />
        );
      default:
        return (
          <Icon
            as={CalendarIcon}
            w={{ base: 10, md: 8, xl: 9 }}
            h={{ base: 10, md: 8, xl: 9 }}
          />
        );
    }
  };
  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <Helmet>
        <title>Admin Dashboard - Acharya ERP</title>
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
            <Box>
              <Text className="text-2xl font-bold font-[Acharya-bold] lg:text-xl mobile:text-xl capitalize">
                Hey, {name}.{" "}
                {curHr < 12
                  ? "Good Morning"
                  : curHr < 18
                  ? "Good Afternoon"
                  : "Good Evening"}
                .
              </Text>
            </Box>
            <Box className="grid grid-cols-4 auto-cols-max gap-5 mobile:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5">
              {cardsOfHome?.map((card, index) => {
                return (
                  <StatsCard
                    key={index}
                    title={card.title}
                    stat={card.count}
                    icon={renderIcon(card.icon)}
                  />
                );
              })}
            </Box>
          </Box>
        )}
      </SideBar>
    </Box>
  );
};

export { Admin };
