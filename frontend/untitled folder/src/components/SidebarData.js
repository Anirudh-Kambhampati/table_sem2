import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
export const SidebarData = [
  // {
  //   title: "Users",
  //   path: "/",
  //   icon: <HiOutlineUsers />,
  //   cName: "nav-text",
  // },
  {
    title: "Dashboard",
    path: "/",
    icon: <MdIcons.MdDashboardCustomize />,
    cName: "nav-text ",
  },
  {
    title: "Instruments",
    path: "/instruments",
    icon: <MdIcons.MdIntegrationInstructions />,
    cName: "nav-text ",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiFillProject />,
    // icon: <GrIcons.GrStorage />,
    cName: "nav-text",
  },
  {
    title: "Storage",
    path: "/storage",
    icon: <FiIcons.FiDatabase />,
    cName: "nav-text",
  },
];
