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
      timing: "",
      organisedBy: user.auid,
    },
    onSubmit: (values) => {
      console.log(values);
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
      if (!values.eventDate) {
        errors.eventDate = "Event Date is Required";
      }
      if (!values.timing) {
        errors.timing = "Start Time is Required";
      }

      return errors;
    },
  });
  const isInvalid = (name) => {
    return formik.errors[name] && formik.touched[name];
  };
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
          <FormControl isInvalid={isInvalid("event")}>
            <FormLabel htmlFor="event">Enter Event Title</FormLabel>
            <Input
              id="event"
              type="event"
              name="event"
              onChange={formik.handleChange}
              placeholder="Event Title"
              value={formik.values.event}
            />
            {formik.touched.event && formik.errors.event && (
              <FormErrorMessage>{formik.errors.event}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={isInvalid("category")}>
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
            {formik.touched.category && formik.errors.category && (
              <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
            )}
          </FormControl>
          <Flex mt="4" justifyContent={"space-between"} gap="5">
            <Box className="w-full">
              <FormControl isInvalid={isInvalid("slots")}>
                <FormLabel htmlFor="slots">Enter Total Slots</FormLabel>
                <Input
                  id="slots"
                  type="number"
                  name="slots"
                  value={formik.values.slots}
                  onChange={formik.handleChange}
                  placeholder="Total Slots"
                />
                {formik.touched.slots && formik.errors.slots && (
                  <FormErrorMessage>{formik.errors.slots}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box className="w-full">
              <FormControl isInvalid={isInvalid("entryFee")}>
                <FormLabel htmlFor="entryFee">Enter Entry Fee</FormLabel>
                <Input
                  id="entryFee"
                  name="entryFee"
                  type="number"
                  value={formik.values.entryFee}
                  onChange={formik.handleChange}
                  placeholder="Total Fee"
                />
                {formik.touched.entryFee && formik.errors.entryFee && (
                  <FormErrorMessage>{formik.errors.entryFee}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>
          <FormControl isInvalid={isInvalid("venue")}>
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
            {formik.touched.venue && formik.errors.venue && (
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
              <FormControl isInvalid={isInvalid("eventDate")}>
                <FormLabel htmlFor="eventDate">Event Date</FormLabel>
                <Input
                  id="eventDate"
                  type="date"
                  name="eventDate"
                  value={formik.values.eventDate}
                  onChange={formik.handleChange}
                  placeholder="Start Time"
                />
                {formik.touched.eventDate && formik.errors.eventDate && (
                  <FormErrorMessage>{formik.errors.eventDate}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box className="w-full">
              <FormControl isInvalid={isInvalid("timing")}>
                <FormLabel htmlFor="timing">Enter Time</FormLabel>
                <Input
                  id="timing"
                  type="time"
                  name="timing"
                  value={formik.values.timing}
                  onChange={formik.handleChange}
                  placeholder="Start time"
                />
                {formik.touched.timing && formik.errors.timing && (
                  <FormErrorMessage>{formik.errors.timing}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
          </Flex>
          <Button className="w-full mt-4" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export { AddEvent };
