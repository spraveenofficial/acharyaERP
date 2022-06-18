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
        <EventCard />
      </div>
    </>
  );
};

export { Event };
