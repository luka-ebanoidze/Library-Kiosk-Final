import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { ICON_SIZE } from "./lib/constants";

import useUser from "../../hook/useUser";
import LinkButton from "../LinkButton";
import Logo from "./Logo";
import AuthorizedUserListItems from "./AuthorizedUserListItems";
import MobileMenu from "./MobileMenu";
import AuthorizationButton from "./AuthorizationButton";

const Header = (): React.ReactElement => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { removeUser, getUser } = useUser();
  const { pathname } = useLocation();

  const handleUnauthorizedUser = () => {
    setMobileMenuOpen(false);
    removeUser();
  };

  useEffect(() => {
    const body = document.body;
    body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full h-32 fixed bg-white border-b-8 border-t-8 border-secondary z-10">
      <div className="h-full flex items-center justify-between px-20 max-s1:px-2">
        <Logo />
        <ul className="h-full flex items-center flex-end gap-10 sm:gap-6">
          {!getUser() ? (
            <AuthorizationButton pathname={pathname} />
          ) : (
            <>
              <LinkButton
                className="block md:hidden hover:cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <AiOutlineMenu size={ICON_SIZE} />
              </LinkButton>
              <AuthorizedUserListItems
                className="hidden md:flex md:justify-end md:gap-10"
                pathname={pathname}
                handleUnauthorizedUser={handleUnauthorizedUser}
              />
            </>
          )}
        </ul>

        {isMobileMenuOpen && (
          <MobileMenu
            pathname={pathname}
            setMobileMenuOpen={setMobileMenuOpen}
            handleUnauthorizedUser={handleUnauthorizedUser}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
