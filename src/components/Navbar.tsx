import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { Box, Avatar } from "@mui/material";
import { Home, Search, AddBox, AccountCircle, Menu } from "@mui/icons-material";

import {
  CustomBottomNavigation,
  CustomBottomNavigationAction,
  BoxMenuLeft,
} from "../styles/styles";

import { logoLight } from "../data/LogoData";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const iconList = [
    {
      icon: <Home fontSize="large" />,
      name: "Home",
      path: "/",
    },
    {
      icon: <Search fontSize="large" />,
      name: "Search",
      path: "/search",
    },
    {
      icon: <AddBox fontSize="large" />,
      name: "Create",
      path: "/create",
    },
    {
      icon: <AccountCircle fontSize="large" />,
      name: "Account",
      path: "/profile",
    },
  ];

  return (
    <>
      <BoxMenuLeft>
        <Avatar src={logoLight} sx={{ width: "100%" }} />
        <CustomBottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          {iconList.map((icon, index) => (
            <CustomBottomNavigationAction
              key={index}
              icon={icon.icon}
              component={Link}
              to={`${icon.path}`}
              label={icon.name}
              showLabel
            />
          ))}
        </CustomBottomNavigation>
        <Menu fontSize="large" sx={{ fill: "#242424" }} />
      </BoxMenuLeft>
      <Outlet />
    </>
  );
};

export default Navbar;
