import {
  DashboardIcon,
  ProfileIcon,
  EventIcon,
  AdminIcon,
  PaymentIcon,
} from "..";

export const menuItemsForAdmin = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
    role: "admin",
  },
  {
    name: "Users",
    url: "/users",
    icon: ProfileIcon,
    role: "admin",
  },
  {
    name: "Events",
    url: "/events",
    icon: EventIcon,
    role: "admin",
  },
  {
    name: "Admins",
    url: "/admins",
    icon: AdminIcon,
    role: "admin",
  },
  {
    name: "Community",
    url: "/community",
    icon: AdminIcon,
    role: "admin",
  },
  {
    name: "Payments",
    url: "/payments",
    icon: PaymentIcon,
    role: "admin",
  },
];

export const menuItemsForModerator = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
    role: "moderator",
  },
];
