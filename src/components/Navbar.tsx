import { ReactElement, useContext, useState } from "react";
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
import { IconButton } from "@mui/material";

//Context
import AppContext from "../context/AppContext";

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
  //theme switch

  const { switchTheme } = useContext(AppContext);

  //Navbar page control
  const [value, setValue] = useState(1);
  const [singleComponent, setSingleComponent] = useState<
    ReactElement | undefined
  >(undefined);

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

  //Lebels to show
  const [showLabel, setShowLabel] = useState(true);

  //Responsiveness Control
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("lg"));
  const logoControl = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <>
        {isSmallDevice && logoControl ? (
          <Link to="/">
            <Logo showlabel={showLabel && !isSmallDevice} />
          </Link>
        ) : (
          ""
        )}
      </>

      <ContainerLeft
        disableGutters
        sx={{
          width: `${showLabel && !isSmallDevice ? "11.4rem" : "5rem"}`,
          backgroundColor: theme.palette.background.default,
          gap: { xs: "0.5rem", md: "2rem" },
          padding: { xs: "1rem 0", sm: "1rem 0 1rem 0.8rem" },
        }}
      >
        <>
          {!isSmallDevice || !logoControl ? (
            <Link to="/">
              <Logo showlabel={showLabel && !isSmallDevice} />
            </Link>
          ) : (
            ""
          )}
        </>
        <CustomBottomNavigation
          value={value}
          onChange={handlePageChange}
          sx={{
            width: `${showLabel || isSmallDevice ? "auto" : "5rem"}`,
            flexDirection: { xs: "row", md: "column" },
            gap: { xs: "0.3rem", md: "1rem" },
          }}
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
                    minWidth: "2rem",
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
                  minWidth: "min-content",
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
        <IconButton
          onClick={switchTheme}
          disableRipple
          sx={{ minWidthidth: "2rem", padding: 0 }}
        >
          <Menu fontSize="large" />
        </IconButton>
      </ContainerLeft>

      <>
        {singleComponent && (
          <BoxNoPageElements
            sx={{
              height: { xs: "calc(100vh - 4rem)", md: "100%" },
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: `${
                singleComponent === iconList[2].element ? "center" : ""
              }`,
              left: { sm: "0", md: "4.5rem" },
              background: theme.palette.background.default,
            }}
          >
            {singleComponent}
          </BoxNoPageElements>
        )}
      </>
      <Outlet />
    </>
  );
};

export default Navbar;
