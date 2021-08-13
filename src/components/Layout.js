import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ className, children }) => (
  <div className={className}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
