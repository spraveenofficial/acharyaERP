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
    url: "/admin/home",
    icon: DashboardIcon,
    role: "admin",
  },
  {
    name: "Students",
    url: "/admin/users",
    icon: ProfileIcon,
    role: "admin",
  },
  {
    name: "Events",
    url: "/admin/events",
    icon: EventIcon,
    role: "admin",
  },
  {
    name: "Admins",
    url: "/admin/admins",
    icon: AdminIcon,
    role: "admin",
  },
  {
    name: "Community",
    url: "/admin/community",
    icon: AdminIcon,
    role: "admin",
  },
  {
    name: "Payments",
    url: "/admin/payments",
    icon: PaymentIcon,
    role: "admin",
  },
];

export const menuItemsForModerator = [
  {
    name: "Dashboard",
    url: "/admin/home",
    icon: DashboardIcon,
    role: "moderator",
  },
];
