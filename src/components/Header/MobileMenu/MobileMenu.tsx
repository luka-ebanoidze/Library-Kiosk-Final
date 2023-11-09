import { AiOutlineClose } from "react-icons/ai";
import { AuthorizedUserListItemsProps } from "../../../types/authorized-user-list-items";
import { ICON_SIZE } from "../lib/constants";

import LinkButton from "../../LinkButton";
import Logo from "../Logo";
import AuthorizedUserListItems from "../AuthorizedUserListItems";

interface MobileMenuProps extends AuthorizedUserListItemsProps {
  setMobileMenuOpen: (_: boolean) => void;
}

const MobileMenu = ({
  pathname,
  handleUnauthorizedUser,
  setMobileMenuOpen,
}: MobileMenuProps): React.ReactElement => (
  <ul className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center overflow-hidden bg-orange-500">
    <Logo onClick={() => setMobileMenuOpen(false)} />

    <LinkButton
      onClick={() => setMobileMenuOpen(false)}
      className="absolute right-4 top-10 hover:cursor-pointer"
    >
      <AiOutlineClose size={ICON_SIZE} />
    </LinkButton>

    <AuthorizedUserListItems
      pathname={pathname}
      handleUnauthorizedUser={handleUnauthorizedUser}
    />
  </ul>
);

export default MobileMenu;
