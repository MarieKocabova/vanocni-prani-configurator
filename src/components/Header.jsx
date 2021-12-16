import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuClass = ({ isActive }) => (isActive ? "menu__link menu__link--active" : "menu__link");

  return (
    <>
      <nav className="menu">
        <NavLink className={menuClass} to="/">
          Úvod
        </NavLink>
        <NavLink className={menuClass} to="/vytvor-prani">
          Vytvořit přáníčko
        </NavLink>
        <NavLink className={menuClass} to="/vyzvedni-prani">
          Vyzvednout
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
