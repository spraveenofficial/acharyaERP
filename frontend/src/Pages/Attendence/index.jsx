import { Box, Text } from "@chakra-ui/react";
import { AttendenceHero } from "../../Components";
import AttendenceCard from "../../Components/Attendence/AttendenceCard";
const Attendence = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box className="p-10 mobile:p-4">
      <AttendenceHero />
      <Box className="text-center">
        <Text className="my-14 text-2xl font-bold">Detailed Attendance</Text>
        <Box className="flex flex-wrap justify-between ">
          {array.map((item) => (
            <AttendenceCard />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { Attendence };
