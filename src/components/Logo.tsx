import { logoLight, shortLogo, logoDark } from "../data/LogoData";

const Logo = ({ showlabel }: { showlabel: boolean }) => {
  return (
    <picture style={{ width: "2.5em", minHeight: "4rem" }}>
      <source srcSet={shortLogo} media="(max-width: 650px)" />
      <img src={showlabel ? logoLight : shortLogo} alt="Logo" />
    </picture>
  );
};

export default Logo;
