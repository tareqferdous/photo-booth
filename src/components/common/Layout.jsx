import { Outlet } from "react-router-dom";
import Logout from "../auth/Logout";
import Logo from "../layout/Logo";
import NavOptions from "../layout/NavOptions";
import UserInfo from "../layout/UserInfo";

const Layout = () => {
  return (
    <>
      <aside className="hidden floating-navbar bg-white  border border-gray-200 px-6 py-2 md:flex flex-col">
        <Logo />
        <NavOptions />
        <div className="flex  justify-between">
          <UserInfo />
          <Logout />
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default Layout;
