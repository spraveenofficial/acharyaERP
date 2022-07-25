import { Box, Button, Icon, Text } from "@chakra-ui/react";
import {
  BeatLoaderIcon,
  StylishCalenderIcon,
  StylishClockIcon,
  StylishLocationIcon,
  StylishTermsIcon,
} from "../../Components";
const Testing = () => {
  return (
    <Box className="px-16 gap-20 mt-2 mobile:px-4 flex mobile:flex-col lg:px-10 lg:gap-10">
      <Box className="w-3/5 mobile:w-full">
        <Text className="text-2xl font-bold mb-4 font-[Acharya-bold]">
          Testing Event Title
        </Text>
        <img
          src="https://res.cloudinary.com/dtswa0rzu/image/upload/v1658431302/1658431297453-883195436.jpg"
          alt=""
          className="min-w-full h-50 object-cover"
        />
      </Box>
      <Box className="w-2/5 p-2 mobile:w-full">
        <Box className="flex gap-3 items-center mb-5">
          <Text className="text-green-400 text-2xl font-bold font-[Acharya-bold]">
            ₹ 500
          </Text>
          <Text className="text-md">2 slots Left</Text>
        </Box>
        <Button
          border="2px"
          borderColor="black"
          _dark={{
            borderColor: "white",
            colorScheme: "red",
          }}
          _disabled={{
            opacity: 1,
          }}
          isLoading={false}
          colorScheme="yellow"
          className="w-full"
          fontSize={["sm", "md", "lg"]}
          spinner={
            <Icon
              as={BeatLoaderIcon}
              w={{ base: 12, md: 12, xl: 14 }}
              h={{ base: 12, md: 12, xl: 14 }}
              color="white"
            />
          }
          p={6}
        >
          Book Now
        </Button>
        <Box className="flex justify-between my-12">
          <Box className="w-[20%] xl:w-[25%] text-center">
            <Icon
              as={StylishCalenderIcon}
              w={{ base: 12, md: 12, xl: 14 }}
              h={{ base: 12, md: 12, xl: 14 }}
            />
            <Box className="my-2">
              <Text className="text-2xl font-extrabold font-[Acharya-bold]">
                2
              </Text>
              <Text className="text-md font-extrabold font-[Acharya-bold]">
                Dec 22
              </Text>
            </Box>
          </Box>
          <Box className="w-[20%] xl:w-[25%] text-center">
            <Icon
              as={StylishClockIcon}
              w={{ base: 12, md: 12, xl: 14 }}
              h={{ base: 12, md: 12, xl: 14 }}
            />
            <Box className="my-2">
              <Text className="text-2xl font-extrabold font-[Acharya-bold]">
                09:00
              </Text>
              <Text className="text-md font-extrabold font-[Acharya-bold]">
                AM
              </Text>
            </Box>
          </Box>
          <Box className="w-[20%] xl:w-[25%] text-center">
            <Icon
              as={StylishTermsIcon}
              w={{ base: 12, md: 12, xl: 14 }}
              h={{ base: 12, md: 12, xl: 14 }}
            />
            <Box className="my-2">
              <Text className="text-md font-extrabold font-[Acharya-bold]">
                NON
              </Text>
              <Text className="text-sm font-extrabold font-[Acharya-bold]">
                Refundable
              </Text>
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-start items-center ml-6">
          <Icon
            as={StylishLocationIcon}
            w={{ base: 12, md: 12, xl: 14 }}
            h={{ base: 12, md: 12, xl: 14 }}
          />
          <Box className="my-4 mx-2">
            <Text className="text-md font-extrabold font-[Acharya-bold]">
              Testing Event Location
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testing;
