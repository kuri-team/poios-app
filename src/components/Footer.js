import * as style from "./Footer.module.css";

const Footer = () => (
  <footer className={style["footer"]}>
    Copyright <a href="https://github.com/kuri-team">Kuri&nbsp;Team</a> &copy;{new Date().getFullYear()} | MIT License
  </footer>
);

export default Footer;
