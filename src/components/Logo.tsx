import { logoLight, shortLogo, logoDark } from "../data/LogoData";

import { useTheme, useMediaQuery } from "@mui/material";

const Logo = ({ showlabel }: { showlabel: boolean }) => {
  const theme = useTheme();

  const isSmaallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const smallStyles = { position: "static" as const };
  const largeStyles = { position: "absolute" as const };

  const generalStyles = {
    width: "2.5em",
    minHeight: "4rem",
  };

  return (
    <picture
      style={{
        ...generalStyles,
        ...(isSmaallScreen ? smallStyles : largeStyles),
      }}
    >
      <source srcSet={shortLogo} media="(max-width: 650px)" />
      <img src={showlabel ? logoLight : shortLogo} alt="Logo" />
    </picture>
  );
};

export default Logo;
