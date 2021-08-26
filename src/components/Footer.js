import * as style from "./Footer.module.css";

const Footer = () => (
  <footer className={style["footer"]}>
    <div>
      Copyright <a href="https://github.com/kuri-team">Kuri&nbsp;Team</a> &copy;{new Date().getFullYear()}{" "}
      MIT&nbsp;License
    </div>
  </footer>
);

export default Footer;
