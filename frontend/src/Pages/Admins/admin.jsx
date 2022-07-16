import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SideBar } from "../../Components";
import { StatsCard } from "./Components/Cards";

const Admin = () => {
  const { user } = useSelector((state) => state.auth);
  const { student_name: name, auid } = user;
  const today = new Date();
  const curHr = today.getHours();
  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <SideBar>
        <Box className="p-5 mobile:p-3">
          <Box>
            <Text className="text-3xl font-bold font-[Acharya-bold] lg:text-2xl mobile:text-xl capitalize">
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
            <StatsCard
              title={"Users"}
              stat={"5,000"}
              // icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Servers"}
              stat={"1,000"}
              // icon={<FiServer size={"3em"} />}
            />
            <StatsCard
              title={"Datacenters"}
              stat={"7"}
              // icon={<GoLocation size={"3em"} />}
            />
          </Box>
        </Box>
      </SideBar>
    </Box>
  );
};

export { Admin };
