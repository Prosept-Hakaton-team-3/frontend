import "./Header.css";
import React from "react";
import logo from "../../images/prosept-logo.svg";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export function Header (props) {
  return (
        <header className="header">
            <Link to="/" title="На главную"><img className="header__logo" src={logo} alt="Логотип"/> </Link>
            <Navigation onMenu={props.onMenu}/>
        </header>
  );
}
