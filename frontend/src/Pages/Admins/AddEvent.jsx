import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

const AddEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      event: "",
      category: "",
      slots: "",
      entryFee: "",
      venue: "",
      eventDate: "",
      startTime: "",
      winingPrize: "00",
      organisedBy: user.auid,
      noOfSlots: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors = {};
      if (!values.event) {
        errors.event = "Event name is Required";
      }
      if (!values.category) {
        errors.category = "Category is Required";
      }
      if (!values.slots) {
        errors.slots = "Slots is Required";
      }
      if (!values.entryFee) {
        errors.entryFee = "Entry Fee is Required";
      }
      if (!values.venue) {
        errors.venue = "Venue is Required";
      }
      if (!values.startDate) {
        errors.startDate = "Start Date is Required";
      }
      if (!values.startTime) {
        errors.startTime = "Start Time is Required";
      }
      if (!values.eventDate) {
        errors.eventDate = "Event Date is Required";
      }

      return errors;
    },
  });

  const categoryOfEvents = [
    {
      id: uuidv4(),
      name: "Gaming",
    },
    {
      id: uuidv4(),
      name: "Quiz",
    },
    {
      id: uuidv4(),
      name: "Music",
    },
    {
      id: uuidv4(),
      name: "Life Style",
    },
    {
      id: uuidv4(),
      name: "Mestori",
    },
    {
      id: uuidv4(),
      name: "PhotoGraphy",
    },
    {
      id: uuidv4(),
      name: "Technical Fest",
    },
    {
      id: uuidv4(),
      name: "Acharya Habba",
    },
    {
      id: uuidv4(),
      name: "Literary And Dramatics",
    },
    {
      id: uuidv4(),
      name: "Dance",
    },
    {
      id: uuidv4(),
      name: "Singing",
    },
    {
      id: uuidv4(),
      name: "Sports",
    },
    {
      id: uuidv4(),
      name: "Essay and Writing",
    },
    {
      id: uuidv4(),
      name: "Others",
    },
  ];
  return (
    <Box className="p-10 mobile:p-4 items-center  font-bold min-h-screen flex flex-col text-center ">
      <Text className="text-3xl font-[Acharya-bold] mb-5">Add Event</Text>
      <Box className="container w-2/4 mobile:w-full">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.errors.event}>
            <FormLabel htmlFor="event">Enter Event Title</FormLabel>
            <Input
              id="event"
              type="event"
              name="event"
              onChange={formik.handleChange}
              placeholder="Event Title"
              value={formik.values.event}
            />
            {formik.errors.event && (
              <FormErrorMessage>{formik.errors.event}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={formik.errors.category}>
            <FormLabel className="mt-4" htmlFor="category">
              Category
            </FormLabel>
            <Select
              id="category"
              onChange={formik.handleChange}
              name="category"
              placeholder="Select Category"
              value={formik.values.category}
            >
              {categoryOfEvents.map((option) => (
                <option key={option.id}>{option.name}</option>
              ))}
            </Select>
            {formik.errors.category && (
              <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
            )}
          </FormControl>
          <Flex mt="4" justifyContent={"space-between"} gap="5">
            <Box className="w-full">
              <FormControl isInvalid={formik.errors.slots}>
                <FormLabel htmlFor="noOfSlots">Enter Total Slots</FormLabel>
                <Input
                  id="noOfSlots"
                  type="number"
                  name="slots"
                  value={formik.values.slots}
                  onChange={formik.handleChange}
                  placeholder="Total Slots"
                />
                {formik.errors.slots && (
                  <FormErrorMessage>{formik.errors.slots}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box className="w-full">
              <FormControl isInvalid={formik.errors.entryFee}>
                <FormLabel htmlFor="entryFee">Enter Entry Fee</FormLabel>
                <Input
                  id="entryFee"
                  name="entryFee"
                  type="number"
                  value={formik.values.entryFee}
                  onChange={formik.handleChange}
                  placeholder="Total Fee"
                />
                {formik.errors.entryFee && (
                  <FormErrorMessage>{formik.errors.entryFee}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>
          <FormControl isInvalid={formik.errors.venue}>
            <FormLabel mt="4" htmlFor="venue">
              Enter Event Venue
            </FormLabel>
            <Input
              id="venue"
              type="venue"
              name="venue"
              value={formik.values.venue}
              onChange={formik.handleChange}
              placeholder="Event Venue"
            />
            {formik.errors.venue && (
              <FormErrorMessage>{formik.errors.venue}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl>
            <FormLabel mt="4" htmlFor="organisedBy">
              Organised By
            </FormLabel>
            <Input
              id="organisedBy"
              type="organisedBy"
              value={user.auid}
              disabled={true}
            />
          </FormControl>
          <Flex mt="4" justifyContent={"space-between"} gap="5">
            <Box className="w-full">
              <FormControl isInvalid={formik.errors.eventDate}>
                <FormLabel htmlFor="eventDate">Event Date</FormLabel>
                <Input
                  id="eventDate"
                  type="date"
                  name="eventDate"
                  value={formik.values.eventDate}
                  onChange={formik.handleChange}
                  placeholder="Start Time"
                />
                {formik.errors.eventDate && (
                  <FormErrorMessage>{formik.errors.eventDate}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box className="w-full">
              <FormControl isInvalid={formik.errors.startTime}>
                <FormLabel htmlFor="startTime">Enter Time</FormLabel>
                <Input
                  id="startTime"
                  type="time"
                  name="startTime"
                  value={formik.values.startTime}
                  onChange={formik.handleChange}
                  placeholder="Start time"
                />
                {formik.errors.startTime && (
                  <FormErrorMessage>{formik.errors.startTime}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>
          <Button type="submit" mt="4" className="w-full">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export { AddEvent };
