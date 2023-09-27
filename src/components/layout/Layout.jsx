import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import HeaderContainer from "./header/HeaderContainer";

const Layout = () => {
  return (
    <>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

export default Layout;
