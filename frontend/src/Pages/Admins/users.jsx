import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ButtonQuickAction, ErrorMessage, SideBar } from "../../Components";
import { fetchAdminUser } from "../../Redux/Actions";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const { loading, success, data, error, message } = useSelector(
    (state) => state.adminuser
  );

  useEffect(() => {
    dispatch(fetchAdminUser());
  }, []);

  return (
    <Box className="min-h-screen flex flex-no-wrap">
      <Helmet>
        <title>Users Dashboard - Acharya ERP</title>
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
              All Users
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
                  <th className="text-left font-[Acharya-semi]  p-4">View</th>
                  <th className="text-left font-[Acharya-semi] hidden mobile:block p-4">
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
                      <td className="pl-4">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                          View
                        </button>
                      </td>
                      <td className="whitespace-normal w-fit">
                        <ButtonQuickAction />
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

export { AdminUsers };
