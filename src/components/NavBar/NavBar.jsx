//Components
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import MessageCarousel from "../UI/MessageCarousel";

//Style
import classes from "./NavBar.module.css";

//Preheader assets
import preheaderAssets from "../../assets/preheaderTitleList.json";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <MessageCarousel
        className="preheader"
        titleList={preheaderAssets}
        delay={5000}
      ></MessageCarousel>
      <NavBarMobile />

      <NavBarDesktop />
    </header>
  );
};

export default NavBar;
