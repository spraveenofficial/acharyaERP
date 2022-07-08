import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const AttendenceHero = (props) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Box
      _dark={{
        background: "rgba(0, 0, 0, 0.1)",
      }}
      className="flex w-full bg-blue-700 p-10 mobile:flex-col mobile:p-4 gap-2 rounded-xl"
    >
      <Box className="w-1/2 flex flex-col justify-center items-center mobile:w-full">
        <div className="md:col-span-2 lg:col-span-1 w-full h-full">
          <Box
            _dark={{
              bg: "#23314d",
            }}
            className="min-h-full py-8 px-6 space-y-6 rounded-xl border bg-white flex flex-col justify-center items-center"
          >
            <svg
              className="w-40 opacity-75"
              viewBox="0 0 146 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.1866 5.7129C81.999 5.7129 90.725 7.44863 98.8666 10.821C107.008 14.1933 114.406 19.1363 120.637 25.3675C126.868 31.5988 131.811 38.9964 135.184 47.138C138.556 55.2796 140.292 64.0057 140.292 72.818C140.292 81.6304 138.556 90.3565 135.184 98.4981C131.811 106.64 126.868 114.037 120.637 120.269C114.406 126.5 107.008 131.443 98.8666 134.815C90.725 138.187 81.999 139.923 73.1866 139.923C64.3742 139.923 55.6481 138.187 47.5066 134.815C39.365 131.443 31.9674 126.5 25.7361 120.269C19.5048 114.037 14.5619 106.64 11.1895 98.4981C7.81717 90.3565 6.08144 81.6304 6.08144 72.818C6.08144 64.0057 7.81717 55.2796 11.1895 47.138C14.5619 38.9964 19.5048 31.5988 25.7361 25.3675C31.9674 19.1363 39.365 14.1933 47.5066 10.821C55.6481 7.44863 64.3742 5.7129 73.1866 5.7129L73.1866 5.7129Z"
                stroke="#e4e4f2"
                strokeWidth="4.89873"
              />
              <path
                d="M73.5 23.4494C79.9414 23.4494 86.3198 24.7181 92.2709 27.1831C98.222 29.6482 103.629 33.2612 108.184 37.816C112.739 42.3707 116.352 47.778 118.817 53.7291C121.282 59.6802 122.551 66.0586 122.551 72.5C122.551 78.9414 121.282 85.3198 118.817 91.2709C116.352 97.222 112.739 102.629 108.184 107.184C103.629 111.739 98.222 115.352 92.2709 117.817C86.3198 120.282 79.9414 121.551 73.5 121.551C67.0586 121.551 60.6802 120.282 54.7291 117.817C48.778 115.352 43.3707 111.739 38.816 107.184C34.2612 102.629 30.6481 97.222 28.1831 91.2709C25.7181 85.3198 24.4494 78.9414 24.4494 72.5C24.4494 66.0586 25.7181 59.6802 28.1831 53.7291C30.6481 47.778 34.2612 42.3707 38.816 37.816C43.3707 33.2612 48.778 29.6481 54.7291 27.1831C60.6802 24.7181 67.0586 23.4494 73.5 23.4494L73.5 23.4494Z"
                stroke="#e4e4f2"
                strokeWidth="4.89873"
              />
              <path
                d="M73 24C84.3364 24 95.3221 27.9307 104.085 35.1225C112.848 42.3142 118.847 52.322 121.058 63.4406C123.27 74.5592 121.558 86.1006 116.214 96.0984C110.87 106.096 102.225 113.932 91.7515 118.27C81.278 122.608 69.6243 123.181 58.7761 119.89C47.9278 116.599 38.5562 109.649 32.258 100.223C25.9598 90.7971 23.1248 79.479 24.2359 68.1972C25.3471 56.9153 30.3357 46.3678 38.3518 38.3518"
                stroke="url(#paint0_linear_622:13617)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M73 5.00001C84.365 5.00001 95.5488 7.84852 105.529 13.2852C115.509 18.7218 123.968 26.5732 130.131 36.1217C136.295 45.6702 139.967 56.6112 140.812 67.9448C141.657 79.2783 139.648 90.6429 134.968 101C130.288 111.357 123.087 120.375 114.023 127.232C104.96 134.088 94.3218 138.563 83.0824 140.248C71.8431 141.933 60.3606 140.775 49.6845 136.878C39.0085 132.981 29.4793 126.471 21.9681 117.942"
                stroke="url(#paint1_linear_622:13617)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M9.60279 97.5926C6.37325 89.2671 4.81515 80.3871 5.01745 71.4595C5.21975 62.5319 7.1785 53.7316 10.7818 45.561C14.3852 37.3904 19.5626 30.0095 26.0184 23.8398C32.4742 17.6701 40.082 12.8323 48.4075 9.6028"
                stroke="url(#paint2_linear_622:13617)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M73 5.00001C86.6504 5.00001 99.9849 9.10831 111.269 16.7904"
                stroke="url(#paint3_linear_622:13617)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle
                cx="73.5"
                cy="72.5"
                r="29"
                fill="#e4e4f2"
                stroke="#e4e4f2"
              />
              <path
                d="M74 82.8332C68.0167 82.8332 63.1666 77.9831 63.1666 71.9998C63.1666 66.0166 68.0167 61.1665 74 61.1665C79.9832 61.1665 84.8333 66.0166 84.8333 71.9998C84.8333 77.9831 79.9832 82.8332 74 82.8332ZM74 80.6665C76.2985 80.6665 78.5029 79.7534 80.1282 78.1281C81.7535 76.5028 82.6666 74.2984 82.6666 71.9998C82.6666 69.7013 81.7535 67.4969 80.1282 65.8716C78.5029 64.2463 76.2985 63.3332 74 63.3332C71.7014 63.3332 69.497 64.2463 67.8717 65.8716C66.2464 67.4969 65.3333 69.7013 65.3333 71.9998C65.3333 74.2984 66.2464 76.5028 67.8717 78.1281C69.497 79.7534 71.7014 80.6665 74 80.6665ZM70.75 67.6665H77.25L79.9583 71.4582L74 77.4165L68.0416 71.4582L70.75 67.6665ZM71.8658 69.8332L70.8691 71.2307L74 74.3615L77.1308 71.2307L76.1341 69.8332H71.8658Z"
                fill="#6A6A9F"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_622:13617"
                  x1="45.9997"
                  y1="19"
                  x2="46.0897"
                  y2="124.308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E323FF" />
                  <stop offset="1" stopColor="#7517F8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_622:13617"
                  x1="1.74103e-06"
                  y1="8.70228e-06"
                  x2="6.34739e-08"
                  y2="140.677"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4DFFDF" />
                  <stop offset="1" stopColor="#4DA1FF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_622:13617"
                  x1="36.4997"
                  y1="5.07257e-06"
                  x2="36.6213"
                  y2="142.36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFD422" />
                  <stop offset="1" stopColor="#FF7D05" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_622:13617"
                  x1="1.74103e-06"
                  y1="8.70228e-06"
                  x2="6.34739e-08"
                  y2="140.677"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4DFFDF" />
                  <stop offset="1" stopColor="#4DA1FF" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <Text
                _dark={{
                  color: "white",
                }}
                className="text-2xl font-bold text-gray-600 text-center"
              >
                Overall Attendance
              </Text>
              <div className="mt-2 flex justify-center">
                <Text
                  _dark={{
                    color: "white",
                  }}
                  className="text-3xl font-bold text-gray-700"
                >
                  {props.overallAttendance} %
                </Text>
              </div>
            </div>
          </Box>
        </div>
      </Box>
      <Box className="w-1/2 flex flex-col justify-center items-center mobile:hidden">
        <Box
          _dark={{
            bg: "#23314d",
          }}
          className="h-full py-8 px-6 space-y-6 rounded-xl border bg-white"
        >
          <div className="flex justify-center flex-col">
            <h1 className="text-2xl font-bold mb-4">Rules of Uses.</h1>
            <ul className="font-bold">
              <li className="mb-2">
                I. This stats are directly linked to official Acharya ERP. We're
                just trying to improve the User Experience.
              </li>
              <li className="mb-2">
                II. If you found any bug, please report it to us. We'll fix it
                until we can. Either for your Attendance you can report to your
                respected HODs and Proctors.
              </li>
              <li className="mb-2">
                III. If you found any bug, please report it to us. We'll fix it
                until we can. Either for your Attendance you can report to your
                respected HODs and Proctors.
              </li>
              <li>
                IV. If any discrepancy is found in your attendance, please bring
                it to the attention of the HODs and Proctors.
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export { AttendenceHero };
