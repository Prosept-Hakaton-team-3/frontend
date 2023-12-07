import "./Header.css";
import React from "react";
import logo from "../../images/prosept-logo.svg";
import { Navigation } from "../Navigation/Navigation";

export function Header (props) {
  return (
        <header className="header">
            <a href="/" title="На главную"><img className="header__logo" src={logo} alt="Логотип"/> </a>
            <Navigation onMenu={props.onMenu}/>
        </header>
  );
}
