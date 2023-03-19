import React, { useState } from "react";
import { BsPlusLg, BsXLg } from "react-icons/bs";
import { MdOutlineSegment } from "react-icons/md";
import { Link } from "react-router-dom";
import NavigationCSS from "./Navigation.module.css";

function Navigation() {
  const [iconNav, setIconNav] = useState(true);

  // use the same state iconNav and the same function which will change the icon on the click on nav option and also chage the icon of menu to plus

  const changeIconNavState = () => {
    setIconNav((prev) => !prev);
  };

  return (
    <section className={NavigationCSS.navSection}>
      <button onClick={changeIconNavState}>
        {iconNav ? <BsPlusLg /> : <BsXLg />}
      </button>

      {/* use the OR shortcut method to show the nav when the menu sign is "X" */}
      {iconNav || (
        <nav>
          <Link
            onClick={changeIconNavState}
            className={NavigationCSS.navLink}
            to="/"
          >
            Enter New Shopping Items
          </Link>
          <Link
            onClick={changeIconNavState}
            className={NavigationCSS.navLink}
            to="/addordeletecategories"
          >
            Add or Delete Categories
          </Link>

          <Link
            onClick={changeIconNavState}
            className={NavigationCSS.navLink}
            to="/contact"
          >
            Contact
          </Link>

          <Link
            onClick={changeIconNavState}
            className={NavigationCSS.navLink}
            to="/help"
          >
            Help
          </Link>
        </nav>
      )}
    </section>
  );
}

export default Navigation;
