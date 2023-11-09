import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const Layout = (): React.ReactElement => (
  <div className="w-full flex flex-col items-center bg-[url(https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg)]">
    <Header />
    <main className="w-11/12 min-h-screen pt-32 flex justify-center border-x-8 border-secondary">
      <div className="w-full bg-white flex justify-center items-center">
        <Outlet />
      </div>
    </main>
    <Footer />
  </div>
);

export default Layout;
