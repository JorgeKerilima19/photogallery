import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { BottomNavigationAction } from "@mui/material";
import { Home, Search, AddBox, AccountCircle } from "@mui/icons-material";

import { CustomBottomNavigation } from "../styles/styles";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const iconList = [
    {
      icon: <Home />,
      path: "/home",
    },
    {
      icon: <Search />,
      path: "/search",
    },
    {
      icon: <AddBox />,
      path: "/create",
    },
    {
      icon: <AccountCircle />,
      path: "/profile",
    },
  ];

  return (
    <>
      <CustomBottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          "@media (max-width: 600px)": {
            flexDirection: "column",
            height: "100%",
          },
        }}
      >
        {iconList.map((icon, index) => (
          <BottomNavigationAction
            key={index}
            icon={icon.icon}
            component={Link}
            to={`${icon.path}`}
          />
        ))}
      </CustomBottomNavigation>
      <Outlet />
    </>
  );
};

export default Navbar;
