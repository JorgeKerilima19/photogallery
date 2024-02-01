import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { Home, Search, AddBox, AccountCircle, Menu } from "@mui/icons-material";

import {
  CustomBottomNavigation,
  CustomBottomNavigationAction,
  ContainerLeft,
} from "../styles/styles";
import Logo from "./Logo";

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
      <ContainerLeft disableGutters>
        <Logo />
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
      </ContainerLeft>
      <Outlet />
    </>
  );
};

export default Navbar;
