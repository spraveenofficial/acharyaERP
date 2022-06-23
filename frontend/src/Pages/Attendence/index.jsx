import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AttendenceHero } from "../../Components";
import AttendenceCard from "../../Components/Attendence/AttendenceCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAttendance } from "../../Redux/Actions";
const Attendence = () => {
  const dispatch = useDispatch();
  const { loading, attendance, success, error } = useSelector(
    (state) => state.attendance
  );
  useEffect(() => {
    dispatch(fetchAttendance());
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  const { data } = attendance;
  return (
    <Box className="p-10 mobile:p-4">
      <AttendenceHero overallAttendance={attendance?.Average_attendance} />
      <Box className="text-center">
        <Text className="my-10 text-2xl font-bold">Detailed Attendance</Text>
        <Box className="flex flex-wrap justify-between ">
          {data?.map((subjects) => (
            <AttendenceCard
              key={subjects.subject_code}
              subjectName={subjects.subject_name}
              attendedClasses={subjects.present}
              totalClasses={subjects.total}
              bg="#1F2889"
              percentage={`${(subjects.present / subjects.total) * 100}%`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { Attendence };
