import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ className, children }) => (
  <div className={className}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.defaultProps = {
  className: "",
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
