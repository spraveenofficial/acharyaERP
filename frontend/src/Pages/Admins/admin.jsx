import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { SideBar } from "../../Components";

const Admin = () => {
  const { user } = useSelector((state) => state.auth);
  const { role, student_name: name, auid } = user;
  console.log(role, name);
  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <SideBar>
        <Box className="p-5 mobile:p-3">
          <Box>
            <Text>Hey, {name}</Text>
          </Box>
        </Box>
      </SideBar>
    </Box>
  );
};

export { Admin };
