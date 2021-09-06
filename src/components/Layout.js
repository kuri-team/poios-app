import { useContext } from "react";
import { GlobalState } from "../GlobalState";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Needs to be wrapped around all pages
 */
const Layout = ({ className, header, footer, children }) => {
  const state = useContext(GlobalState);
  console.log(state);
  return (
    <>
      {header ? <Header /> : null}
      <main
        className={className}
        style={
          header
            ? { paddingTop: "var(--header-height)", minHeight: "calc(100vh - var(--header-height))" }
            : { minHeight: "100vh" }
        }
      >
        {children}
      </main>
      {footer ? <Footer /> : null}
    </>
  );
};

export default Layout;
