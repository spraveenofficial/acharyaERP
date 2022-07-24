import { Box, Button, Icon, Text } from "@chakra-ui/react";
import {
  StylishCalenderIcon,
  StylishClockIcon,
  StylishLocationIcon,
} from "../../Components";
const Testing = () => {
  return (
    <Box className="px-16 gap-4 mt-2 mobile:px-4 flex mobile:flex-col">
      <Box className="w-3/5 mobile:w-full">
        <Text className="text-3xl font-bold mb-4 font-[Acharya-bold]">
          Testing Event Title
        </Text>
        <img
          src="https://res.cloudinary.com/dtswa0rzu/image/upload/v1658431302/1658431297453-883195436.jpg"
          alt=""
          className="min-w-full h-50 object-cover"
        />
      </Box>
      <Box className="w-2/5 p-2 mobile:w-full">
        <Box className="flex gap-3 items-center mb-4">
          <Text className="text-green-400 text-2xl font-bold font-[Acharya-bold]">
            ₹ 500
          </Text>
          <Text className="text-md">2 slots Left</Text>
        </Box>
        <Button colorScheme="yellow" className="w-full" p={6}>
          Grab Now
        </Button>
        <Box className="flex justify-between mt-5 px-4">
          <Icon
            as={StylishCalenderIcon}
            w={{ base: 12, md: 12, xl: 16 }}
            h={{ base: 12, md: 12, xl: 16 }}
          />
          <Icon
            as={StylishClockIcon}
            w={{ base: 12, md: 12, xl: 16 }}
            h={{ base: 12, md: 12, xl: 16 }}
          />
          <Icon
            as={StylishLocationIcon}
            w={{ base: 12, md: 12, xl: 16 }}
            h={{ base: 12, md: 12, xl: 16 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Testing;
