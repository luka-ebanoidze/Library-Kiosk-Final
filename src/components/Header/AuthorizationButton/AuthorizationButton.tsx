import { BiUserCircle } from "react-icons/bi";

import { AuthorizedUserListItemsProps } from "../../../types/authorized-user-list-items";
import { ROUTES_CONFIG } from "../../../config/routes";
import { ICON_SIZE } from "../lib/constants";

import LinkButton from "../../LinkButton";

const { LOGIN, REGISTER } = ROUTES_CONFIG;

interface AuthorizationButtonProps
  extends Pick<AuthorizedUserListItemsProps, "pathname"> {}

const AuthorizationButton = ({
  pathname,
}: AuthorizationButtonProps): React.ReactElement => (
  <>
    {pathname === LOGIN.path ? (
      <LinkButton
        className="hover:text-gray-700 hover:cursor-pointer"
        path={REGISTER.path}
      >
        <span className="flex items-center gap-2">
          <BiUserCircle size={ICON_SIZE} /> {REGISTER.name}
        </span>
      </LinkButton>
    ) : (
      <LinkButton
        className="hover:text-gray-700 hover:cursor-pointer"
        path={LOGIN.path}
      >
        <span className="flex items-center gap-2">
          <BiUserCircle size={ICON_SIZE} /> {LOGIN.name}
        </span>
      </LinkButton>
    )}
  </>
);

export default AuthorizationButton;
