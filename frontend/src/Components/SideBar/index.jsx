import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  BookMarkIcon,
  ProfileIcon,
  MoreIcon,
} from "../index";

const SideBar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sticky left-0 top-0 w-1/5 text-white mobile:hidden flex flex-col ml-2 h-screen">
      <div className="pr-3 h-full flex flex-col justify-between">
        <div className="px-2">
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/"
          >
            <HomeIcon />
            <p>Home</p>
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/explore"
          >
            <ExploreIcon />
            <p>Explore</p>
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/notification"
          >
            <NotificationIcon />
            <p>Notifications</p>
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/messages"
          >
            <MessageIcon />
            <div className="flex gap-2">
              <p>Messages</p>
            </div>
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/bookmarks"
          >
            <BookMarkIcon />
            Bookmarks
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/profile"
          >
            <ProfileIcon />
            Profile
          </NavLink>
          <NavLink
            className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full text-black"
            activeclassname="active"
            to="/setting"
          >
            <MoreIcon />
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
