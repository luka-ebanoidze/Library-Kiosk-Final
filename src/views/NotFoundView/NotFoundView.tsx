import { ROUTES_CONFIG } from "../../config/routes";

import LinkButton from "../../components/LinkButton";

const { HOME } = ROUTES_CONFIG;

const NotFoundPage = (): React.ReactElement => (
  <div className="w-full min-h-screen flex flex-col items-center">
    <p>Sorry, the page you are looking for is not available</p>
    <LinkButton path={HOME.path}>Go to the main page</LinkButton>
  </div>
);

export default NotFoundPage;
