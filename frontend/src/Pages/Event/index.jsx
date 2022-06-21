import { Box, Button, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { EventCard, SubscribeEvent } from "../../Components";

const Event = () => {
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
          <Button>Add Event</Button>
        </Box>
        <EventCard />
      </div>
    </>
  );
};

export { Event };
