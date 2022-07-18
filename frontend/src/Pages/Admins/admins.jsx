import {
  Box,
  Button,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ButtonQuickAction, ErrorMessage, SideBar } from "../../Components";
import {
  fetchAdminModsAndAdmins,
  removeAdminOrMods,
} from "../../Redux/Actions";
import { itemsForAdminsMenu as itemsForMenu } from "./Utils/menus";
const AdminAdmins = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const toast = useToast();
  const { loading, success, data, error, message } = useSelector(
    (state) => state.adminuser
  );
  useEffect(() => {
    dispatch(fetchAdminModsAndAdmins());
  }, []);

  const handleChangeRole = (auid, role) => {
    dispatch(removeAdminOrMods({ auid, role }, toast));
  };
  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <Helmet>
        <title>Admins Dashboard - Acharya ERP</title>
        <meta name="description" content="This is the home page." />
      </Helmet>
      <SideBar>
        {loading && (
          <div className="flex justify-center items-center min-h-screen">
            <Spinner size="xl" />
          </div>
        )}
        {error && (
          <ErrorMessage
            message={message}
            submessage={"Oops, Something went Wrong."}
          />
        )}
        {!loading && !error && success && (
          <Box className="p-5 mobile:p-3">
            <Text fontSize="2xl" fontWeight="extrabold">
              Admins and Moderators
            </Text>
            <Text>
              This is the list of all the admins and moderators who have
              registered with us.
            </Text>
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr>
                  <th className="text-left font-[Acharya-semi]  p-4 mobile:hidden">
                    S.no
                  </th>
                  <th className="text-left font-[Acharya-semi]  p-4">AUID</th>
                  <th className="text-left font-[Acharya-semi]  p-4 mobile:hidden">
                    ROLE
                  </th>
                  <th className="text-left font-[Acharya-semi] p-4 hidden mobile:block">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user, index) => {
                  return (
                    <tr
                      key={user.id}
                      tabIndex={0}
                      className="focus:outline-none h-16 border border-gray-100 rounded"
                    >
                      <td className="mobile:hidden">
                        <div className="flex items-center pl-5">
                          <Text className="text-base leading-none mr-2">
                            {index + 1}
                          </Text>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-bold leading-none mr-2">
                            {user.auid}
                          </p>
                        </div>
                      </td>

                      <td className="pl-5 mobile:hidden lg:table-cell">
                        <p
                          className={`capitalize py-3 px-3 text-sm focus:outline-none leading-none rounded `}
                        >
                          {user.role}
                        </p>
                      </td>
                      <td className="whitespace-normal">
                        <ButtonQuickAction
                          isClicked={clicked}
                          setClicked={setClicked}
                        >
                          {itemsForMenu(user.role)?.map((item, index) => {
                            return (
                              <Button
                                key={index}
                                onClick={() => {
                                  handleChangeRole(user.auid, item.params);
                                  setClicked(true);
                                }}
                                w="100%"
                                className="mb-2"
                              >
                                {item.name}
                              </Button>
                            );
                          })}
                        </ButtonQuickAction>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
        )}
      </SideBar>
    </Box>
  );
};

export { AdminAdmins };
