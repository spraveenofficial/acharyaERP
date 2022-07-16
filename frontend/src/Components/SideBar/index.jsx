import { useEffect, useState } from "react";
import { DashboardIcon } from "..";
const SideBar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");
  useEffect(() => {
    updateDeviceType(window.innerWidth);
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });
  const updateDeviceType = (width) => {
    if (width >= 768) {
      setDeviceType("desktop");
      return;
    }
    setDeviceType("mobile");
  };
  return (
    <div className="w-full h-full">
      <div className="flex flex-no-wrap">
        {deviceType === "desktop" && (
          <div
            style={{ minHeight: "716px" }}
            className="w-64 relative md:relative bg-gray-800 shadow md:h-full flex-col justify-between flex"
          >
            <div className="px-8">
              <ul className="mt-12">
                <li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <DashboardIcon />
                    <span className="text-sm ml-2">Dashboard</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="text-sm ml-2">Products</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-compass"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 16 10 10 16 8 14 14 8 16" />
                      <circle cx={12} cy={12} r={9} />
                    </svg>
                    <span className="text-sm ml-2">Performance</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-code"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                    <span className="text-sm ml-2">Deliverables</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-puzzle"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                    <span className="text-sm ml-2">Invoices</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-stack"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="12 4 4 8 12 12 20 8 12 4" />
                      <polyline points="4 12 12 16 20 12" />
                      <polyline points="4 16 12 20 20 16" />
                    </svg>
                    <span className="text-sm ml-2">Inventory</span>
                  </a>
                </li>
                <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                  <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-settings"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    <span className="text-sm ml-2">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
        {deviceType === "mobile" && (
          <div
            className="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between mobile:flex transition duration-150 ease-in-out"
            id="mobile-nav"
            style={{
              transform: isOpen ? "translateX(0px)" : "translateX(-260px)",
            }}
          >
            <button
              aria-label="toggle sidebar"
              id="openSideBar"
              className="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-12 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
              onClick={() => setIsOpen((open) => !open)}
              style={{
                display: !isOpen ? "flex" : "none",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-adjustments"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={6} cy={10} r={2} />
                <line x1={6} y1={4} x2={6} y2={8} />
                <line x1={6} y1={12} x2={6} y2={20} />
                <circle cx={12} cy={16} r={2} />
                <line x1={12} y1={4} x2={12} y2={14} />
                <line x1={12} y1={18} x2={12} y2={20} />
                <circle cx={18} cy={7} r={2} />
                <line x1={18} y1={4} x2={18} y2={5} />
                <line x1={18} y1={9} x2={18} y2={20} />
              </svg>
            </button>
            <button
              aria-label="Close sidebar"
              id="closeSideBar"
              className="h-10 w-10 bg-gray-800 absolute right-0 mt-12 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
              onClick={() => setIsOpen((open) => !open)}
              style={{
                display: !isOpen ? "none" : "flex",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </button>
            {isOpen && (
              <>
                <div className="px-8 h-screen">
                  <ul className="mt-12">
                    <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <DashboardIcon />
                        <span className="text-sm ml-2">Dashboard</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-puzzle"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                        <span className="text-sm ml-2">Products</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-compass"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="text-sm ml-2">Performance</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                      <a
                        href="javascript:void(0)"
                        className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="text-sm ml-2">Deliverables</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-puzzle"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                        <span className="text-sm ml-2">Invoices</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-stack"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="12 4 4 8 12 12 20 8 12 4" />
                          <polyline points="4 12 12 16 20 12" />
                          <polyline points="4 16 12 20 20 16" />
                        </svg>
                        <span className="text-sm ml-2">Inventory</span>
                      </a>
                    </li>
                    <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                      <a className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-settings"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        <span className="text-sm ml-2">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        )}
        <div className="mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 mobile:w-full">
          <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
