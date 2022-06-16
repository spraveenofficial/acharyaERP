import { EventCard, SubscribeEvent } from "../../Components";

const Event = () => {
  return (
    <>
      <SubscribeEvent />
      <div className="p-10 mobile:p-4">
        <EventCard />
      </div>
    </>
  );
};

export { Event };
