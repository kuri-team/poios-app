import Header from "./Header";
import Footer from "./Footer";

/**
 * Needs to be wrapped around all pages
 */
const Layout = ({ className, header, footer, children }) => (
  <div className={className}>
    {header ? <Header /> : null}
    <main>{children}</main>
    {footer ? <Footer /> : null}
  </div>
);

export default Layout;
