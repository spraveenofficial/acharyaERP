import { Box, Spinner, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchClasses } from "../../Redux/Actions";
import { useEffect } from "react";
import { ClassCard } from "../../Components";
const Classes = () => {
  const dispatch = useDispatch();
  const { loading, classes } = useSelector((state) => state.classes);
  const { onlineClasses, offlineClasses } = classes;
  useEffect(() => {
    dispatch(fetchClasses());
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }
  return (
    <Box className="min-h-screen p-10 mobile:p-4">
      <Box>
        <Text className="text-2xl font-bold font-[Acharya-bold]">
          Your Offline Classes
        </Text>
        {offlineClasses.length == 0 ? (
          <Box className="h-40 flex justify-center text-center items-center">
            <Text className="font-bold text-xl">No Offline Classes Today.</Text>
          </Box>
        ) : (
          <Box className="flex flex-wrap gap-10 mobile:gap-2">
            {offlineClasses?.map((eachClasses) => (
              <ClassCard
                bg="#1F2889"
                date={eachClasses.selected_date}
                subjectName={eachClasses.subject_name}
                time={eachClasses.interval}
              />
            ))}
          </Box>
        )}
      </Box>
      <Box className="mt-5">
        <Text className="text-2xl font-bold font-[Acharya-bold]">
          Your Online Classes
        </Text>
        {onlineClasses.length == 0 ? (
          <Box className="h-40 flex justify-center text-center items-center">
            <Text className="font-bold text-xl">No Online Classes Today.</Text>
          </Box>
        ) : (
          onlineClasses?.map((eachClasses) => (
            <ClassCard
              bg="#1F2889"
              date={eachClasses.selected_date}
              subjectName={eachClasses.subject_name}
              time={eachClasses.interval}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export { Classes };
