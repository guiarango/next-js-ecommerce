import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

//Fonts & Icons
import {
  BsWhatsapp,
  BsFillFilterCircleFill,
  BsXCircleFill,
  BsGithub,
} from "react-icons/bs";

//Styles
import classes from "./NavBarMobile.module.css";
import CartIcon from "../CartIcon/CartIcon";

const NavBarMobile = () => {
  const [activeNav, setActiveNav] = useState(false);
  const cart = useSelector((state) => state.cart);

  const changeActiveNavState = useCallback(() => {
    setActiveNav((prev) => !prev);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <div className={classes.logoContainer}>
        <Link className={classes.logo} href={"/"}>
          <img src="/images/logoDev.png" alt="Logo" />
        </Link>
      </div>

      <div className={classes.menuContainer}>
        <div className={classes.contactIcons}>
          <Link
            href="https://wa.me/+573053388965?text=Guillermo%20Arango,%20How%20can%20I%20help%20you?"
            className={classes.whatsAppWidgetContainer}
          >
            <BsWhatsapp className={classes.whatsAppIcon} />
          </Link>
          <Link
            href={"https://github.com/guiarango"}
            className={classes.gitHubIcon}
          >
            <BsGithub />
          </Link>
        </div>

        <div onClick={changeActiveNavState} className={classes.activateNav}>
          {activeNav ? <BsXCircleFill /> : <BsFillFilterCircleFill />}
        </div>
        <div className={classes.cartWidgetContainer}>
          <div className={classes.numberOfItems}>{cart.itemsCount}</div>
          <CartIcon />
        </div>
      </div>

      <nav
        className={`${classes.nav} ${
          activeNav ? classes.navActive : classes.navInactive
        }`}
      >
        <ul className={classes.navUl} onClick={changeActiveNavState}>
          <li className={classes.item}>
            <Link className={classes.itemLink} href={"/category/1"}>
              Accesories
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} href={"/category/2"}>
              Cellphones
            </Link>
          </li>

          <li className={classes.item}>
            <Link className={classes.itemLink} href={"/category/3"}>
              Tablets
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} href={"/category/4"}>
              Computers
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} href={"/category/5"}>
              TV's
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMobile;
