import { Route, Routes as ReactRoutes } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/routes";

import Layout from "./components/Layout";
import HomeView from "./views/HomeView";
import BorrowBookView from "./views/BorrowBookView";
import ReturnBookView from "./views/ReturnBookView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import BooksView from "./views/BooksView";
import BorrowedBooksView from "./views/BorrowedBooksView";
import NotFoundView from "./views/NotFoundView";

interface ComponentMap {
  [key: string]: React.ReactElement;
}

type RouteKeys = keyof typeof ROUTES_CONFIG;

const routeKeys: RouteKeys[] = Object.keys(ROUTES_CONFIG);

const componentMap: ComponentMap = {
  HOME: <HomeView />,
  BORROW_BOOK: <BorrowBookView />,
  RETURN_BOOK: <ReturnBookView />,
  LOGIN: <LoginView />,
  REGISTER: <RegisterView />,
  BOOKS_CATEGORY: <BooksView />,
  BORROWED_BOOKS: <BorrowedBooksView />,
  NOT_FOUND: <NotFoundView />,
};

const Routes = () => (
  <ReactRoutes>
    <Route element={<Layout />}>
      {routeKeys.map((routeKey, index) => (
        <Route
          key={index}
          path={ROUTES_CONFIG[routeKey].path}
          element={componentMap[routeKey]}
        />
      ))}
    </Route>
  </ReactRoutes>
);

export default Routes;
