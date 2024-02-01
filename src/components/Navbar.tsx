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
  const [value, setValue] = useState(0);
  const [singleComponent, setSingleComponent] = useState<
    ReactElement | undefined
  >(undefined);

  const [showLabel, setShowLabel] = useState(true);

  const handleShowLabel = () => setShowLabel((showLabel) => !showLabel);

  const handleSingleComponent = (component: ReactElement | undefined) => {
    handleShowLabel();
    if (!component) return;

    if (singleComponent && singleComponent === component) {
      setSingleComponent(undefined);
      return;
    }
    return setSingleComponent(component);
  };

  return (
    <>
      <ContainerLeft disableGutters>
        <Logo showlabel={showLabel} />
        <CustomBottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
        >
          {iconList.map((icon, index) => {
            if (icon.path) {
              return (
                <CustomBottomNavigationAction
                  key={index}
                  icon={icon.icon}
                  component={Link}
                  to={`${icon.path}`}
                  label={icon.name}
                  showLabel={showLabel}
                  sx={{
                    "& .MuiBottomNavigationAction-label": {
                      display: `${showLabel ? "block" : "none"}`,
                    },
                  }}
                />
              );
            }
            return (
              <CustomBottomNavigationAction
                key={index}
                icon={icon.icon}
                label={icon.name}
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
        <>
          {singleComponent && (
            <BoxNoPageElements>{singleComponent}</BoxNoPageElements>
          )}
        </>
      </ContainerLeft>
      <Outlet />
    </>
  );
};

export default Navbar;
