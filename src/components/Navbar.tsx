import { ReactElement, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";

import { Home, Search, AddBox, AccountCircle, Menu } from "@mui/icons-material";

import {
  CustomBottomNavigation,
  CustomBottomNavigationAction,
  ContainerLeft,
  BoxNoPageElements,
} from "../styles/styles";

import { CreateComponent, SearchComponent } from "./pages";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const iconList = [
  {
    icon: <Home fontSize="large" />,
    name: "Home",
    path: "/",
  },
  {
    icon: <Search fontSize="large" />,
    name: "Search",
    path: "",
    element: <SearchComponent />,
  },
  {
    icon: <AddBox fontSize="large" />,
    name: "Create",
    path: "",
    element: <CreateComponent />,
  },
  {
    icon: <AccountCircle fontSize="large" />,
    name: "Account",
    path: "/profile",
  },
];

const Navbar = () => {
  const [value, setValue] = useState(1);
  const [singleComponent, setSingleComponent] = useState<
    ReactElement | undefined
  >(undefined);

  const [showLabel, setShowLabel] = useState(true);

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

  const handlePageChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleSingleComponent = (component: ReactElement | undefined) => {
    setShowLabel(false);
    if (!component) return;

    if (singleComponent && singleComponent === component) {
      setShowLabel(true);
      setSingleComponent(undefined);
      return;
    }
    return setSingleComponent(component);
  };

  console.log(isSmallDevice);

  return (
    <>
      <ContainerLeft
        disableGutters
        sx={{ width: `${showLabel && !isSmallDevice ? "11.4rem" : "5rem"}` }}
      >
        <Logo showlabel={showLabel && !isSmallDevice} />
        <CustomBottomNavigation
          // value={`${isSmallDevice ? value : value}`}
          value={value}
          onChange={handlePageChange}
          sx={{ width: `${showLabel || isSmallDevice ? "auto" : "5rem"}` }}
        >
          {iconList.map((icon, index) => {
            if (icon.path) {
              return (
                <CustomBottomNavigationAction
                  key={index}
                  icon={icon.icon}
                  component={Link}
                  to={`${icon.path}`}
                  label={`${!isSmallDevice ? icon.name : ""}`}
                  showLabel={showLabel}
                  sx={{
                    "& .MuiBottomNavigationAction-label": {
                      display: `${showLabel ? "block" : "none"}`,
                    },
                  }}
                  onClick={() => {
                    setShowLabel(true);
                    setSingleComponent(undefined);
                  }}
                />
              );
            }
            return (
              <CustomBottomNavigationAction
                key={index}
                icon={icon.icon}
                label={`${!isSmallDevice ? icon.name : ""}`}
                showLabel={showLabel}
                sx={{
                  "& .MuiBottomNavigationAction-label": {
                    display: `${showLabel ? "block" : "none"}`,
                  },
                }}
                onClick={() => {
                  handleSingleComponent(icon.element);
                }}
              />
            );
          })}
        </CustomBottomNavigation>
        <Menu fontSize="large" sx={{ fill: "#242424" }} />
      </ContainerLeft>
      <>
        {singleComponent && (
          <BoxNoPageElements>{singleComponent}</BoxNoPageElements>
        )}
      </>
      <Outlet />
    </>
  );
};

export default Navbar;
