import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SideMenuDataArray = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    dropdown: 'false'
  },
  {
    title: "Analytics",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    dropdown: 'false'
  },
  {
    title: "E-Commerce",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    dropdown: 'true'
  },
  {
    title: "Team",
    path: "/",
    icon: <IoIcons.IoIosAirplane />,
    dropdown: 'true'
  },
  {
    title: "Campaigns",
    path: "/",
    icon: <FaIcons.FaAffiliatetheme />,
    dropdown: 'false'
  },
  {
    title: "Messages",
    path: "/",
    icon: <IoIcons.IoIosBicycle />,
    dropdown: 'false'
  },
  {
    title: "Tasks",
    path: "/",
    icon: <IoIcons.IoIosCloudCircle />,
    dropdown: 'false'
  },
  {
    title: "Inbox",
    path: "/",
    icon: <IoIcons.IoIosRibbon />,
    dropdown: 'false'
  },
  {
    title: "Calendar",
    path: "/",
    icon: <IoIcons.IoIosBasketball />,
    dropdown: 'false'
  },
  {
    title: "Settings",
    path: "/",
    icon: <IoIcons.IoIosBluetooth />,
    dropdown: 'true'
  },
  {
    title: "Utility",
    path: "/",
    icon: <IoIcons.IoIosBatteryCharging />,
    dropdown: 'true'
  },
  {
    title: "Authentication",
    path: "/",
    icon: <IoIcons.IoIosBriefcase />,
    dropdown: 'true'
  },
  {
    title: "Onboarding",
    path: "/",
    icon: <IoIcons.IoIosMagnet />,
    dropdown: 'true'
  },
  {
    title: "Components",
    path: "/",
    icon: <IoIcons.IoIosEye />,
    dropdown: 'true'
  }
];
