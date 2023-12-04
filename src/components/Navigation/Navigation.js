import "./Navigation.css";
import React from "react";

export function Navigation (props) {
  return (
        <button className="navigation" type="button" onClick={props.onMenu} title="Навигация"></button>
  );
}
