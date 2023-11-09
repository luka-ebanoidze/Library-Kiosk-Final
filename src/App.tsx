import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Routes from "./Routes";

import "react-toastify/dist/ReactToastify.css";

// See Readme.md to start project

const App = () => (
  <Suspense fallback={<></>}>
    <ToastContainer />
    <Routes />
  </Suspense>
);

export default App;
