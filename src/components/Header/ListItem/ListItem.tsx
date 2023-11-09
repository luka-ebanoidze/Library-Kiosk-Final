import LinkButton from "../../LinkButton";
import { LinkProps } from "../../../types/link";

const ListItem = ({
  className = "",
  path = "",
  children,
  onClick,
}: LinkProps): React.ReactElement => (
  <li className={className}>
    <LinkButton path={path} onClick={onClick}>
      {children}
    </LinkButton>
  </li>
);

export default ListItem;
