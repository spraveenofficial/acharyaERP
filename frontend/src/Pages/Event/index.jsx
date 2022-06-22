import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EventCard, SubscribeEvent } from "../../Components";
import { fetchEvents } from "../../Redux/Actions";

const Event = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToAddToRoutes = () => navigate("/admin/add-event");
  const { loading, success, events } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Events - Acharya ERP</title>
      </Helmet>
      <SubscribeEvent />
      <div className="p-10 mobile:p-4">
        <Box className="flex justify-between">
          <Text className="text-4xl font-[Acharya-bold] mb-4">All Events</Text>
          {user.role === "ADMIN" ||
            (user.role === "MODERATOR" && (
              <Button onClick={navigateToAddToRoutes}>Add Event</Button>
            ))}
        </Box>
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <Spinner size="xl" />
          </div>
        ) : (
          <Box className="flex flex-wrap gap-5">
            {events?.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </Box>
        )}
      </div>
    </>
  );
};

export { Event };
