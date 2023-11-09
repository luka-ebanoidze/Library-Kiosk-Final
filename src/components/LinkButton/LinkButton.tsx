import { Link } from "react-router-dom";
import { LinkProps } from "../../types/link";

const LinkButton = ({
  className = "",
  path = "#",
  children,
  onClick,
}: LinkProps): React.ReactElement => (
  <Link to={path} className={className} onClick={onClick}>
    {children}
  </Link>
);

export default LinkButton;
