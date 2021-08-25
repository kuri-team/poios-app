import * as commonStyle from "./common.module.css";
import * as style from "./AccountMenu.module.css";

const AccountMenu = () => {
  return (
    <>
      <button className={[commonStyle["button"], style["button"]].join(" ")}>
        <img src={"/media/account_circle_black_24dp.svg"} alt={"Notifications"} />
      </button>
    </>
  );
};

export default AccountMenu;
