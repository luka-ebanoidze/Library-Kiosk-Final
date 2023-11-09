interface Route {
  path: string;
  name: string;
}

interface RouteConfig {
  [key: string]: Route;
}

export const ROUTES_CONFIG: RouteConfig = {
  HOME: {
    path: "/",
    name: "Home",
  },
  BORROW_BOOK: {
    path: "/borrow-book",
    name: "Borrow a book",
  },
  RETURN_BOOK: {
    path: "/return-book",
    name: "Return a book",
  },
  LOGIN: {
    path: "/login",
    name: "Login",
  },
  REGISTER: {
    path: "/register",
    name: "Register",
  },
  BOOKS_CATEGORY: {
    path: "/books/:category",
    name: "Books Category",
  },
  BORROWED_BOOKS: {
    path: "/borrowed-books",
    name: "Borrowed Books",
  },
  NOT_FOUND: {
    path: "*",
    name: "Not Found",
  },
};
