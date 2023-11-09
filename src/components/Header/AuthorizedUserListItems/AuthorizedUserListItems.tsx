import { AiOutlineAccountBook } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AuthorizedUserListItemsProps } from "../../../types/authorized-user-list-items";
import { ROUTES_CONFIG } from "../../../config/routes";
import { ICON_SIZE } from "../lib/constants";

import ListItem from "../ListItem";

const { HOME, BORROWED_BOOKS } = ROUTES_CONFIG;

const AuthorizedUserListItems = ({
  className = "",
  handleUnauthorizedUser,
}: AuthorizedUserListItemsProps): React.ReactElement => (
  <div className={className}>
    <ListItem
      className={`relative hover:text-gray-700 hover:cursor-pointer ${className}`}
      path={BORROWED_BOOKS.path}
    >
      <span className="flex items-center gap-3">
        {BORROWED_BOOKS.name} <AiOutlineAccountBook size={ICON_SIZE} />
      </span>
    </ListItem>

    <ListItem
      className={`flex hover:text-gray-700 hover:cursor-pointer ${className}`}
      path={HOME.path}
      onClick={handleUnauthorizedUser}
    >
      <span className="flex items-center gap-3">
        Logout <BiLogOut size={ICON_SIZE} />
      </span>
    </ListItem>
  </div>
);

export default AuthorizedUserListItems;
