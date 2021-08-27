import Header from "./Header";
import Footer from "./Footer";

/**
 * Needs to be wrapped around all pages
 */
const Layout = ({ className, header, footer, children }) => {
  return (
    <>
      {header ? <Header /> : null}
      <main className={className} style={header ? { paddingTop: "var(--header-height)" } : null}>
        {children}
      </main>
      {footer ? <Footer /> : null}
    </>
  );
};

export default Layout;
