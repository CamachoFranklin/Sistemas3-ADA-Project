import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const SidebarData = [
  {
    id: 1,
    label: "Home",
    route: "/home",
    icon: <ShoppingCartIcon />,
    cName: "nav-text",
  },
  {
    id: 2,
    label: "Alquiler",
    route: "/alquiler",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    id: 3,
    label: "Local",
    route: "/local",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    id: 4,
    label: "Area Comun",
    route: "/areaComun",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    id: 5,
    label: "Reservacion",
    route: "/reservacion",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
