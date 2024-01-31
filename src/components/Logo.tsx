import React from "react";

import { logoLight, shortLogo, logoDark } from "../data/LogoData";

const Logo = () => {
  return (
    <picture style={{ width: "2.5em" }}>
      <source srcSet={shortLogo} media="(max-width:650px)" />
      <img src={logoLight} alt="Logo" />
    </picture>
  );
};

export default Logo;
