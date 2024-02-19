import React, { MouseEventHandler, createContext, useContext } from "react";
import { Theme } from "@mui/material";

interface AppContextType {
  //theme vars
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  lightTheme: Theme;
  darkTheme: Theme;
  darkMode: boolean;
  switchTheme: MouseEventHandler<HTMLButtonElement>;

  //users
  users: any;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

export default AppContext;
