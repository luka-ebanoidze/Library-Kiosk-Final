import LibraryKioskLogo from "../../../assets/LibraryKioskLogo.png";

import LinkButton from "../../LinkButton";

import { LinkProps } from "../../../types/link";

import { ROUTES_CONFIG } from "../../../config/routes";

interface LogoProps extends Pick<LinkProps, "onClick"> {}

const { HOME } = ROUTES_CONFIG;

const Logo = ({ onClick }: LogoProps): React.ReactElement => {
  return (
    <LinkButton
      className="w-36  hover:cursor-pointer"
      path={HOME.path}
      onClick={onClick}
    >
      <img
        className="h-full object-contain"
        src={LibraryKioskLogo}
        alt="Library Kiosk Logo"
      />
    </LinkButton>
  );
};

export default Logo;
