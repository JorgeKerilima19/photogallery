import { logoLight, shortLogo, logoDark } from "../data/LogoData";

import { useTheme, useMediaQuery } from "@mui/material";

const Logo = ({ showlabel }: { showlabel: boolean }) => {
  const theme = useTheme();

  const isSmaallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const smallStyles = { position: "static" as const };
  const largeStyles = {
    position: "fixed" as const,
    top: "0.4rem",
    left: "0.2rem",
    opacity: "0.5",
  };

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
      <img
        src={showlabel ? logoLight : shortLogo}
        alt="Logo"
        style={{
          maxHeight: `${isSmaallScreen && showlabel ? "4rem" : "2.5rem"}`,
        }}
      />
    </picture>
  );
};

export default Logo;
