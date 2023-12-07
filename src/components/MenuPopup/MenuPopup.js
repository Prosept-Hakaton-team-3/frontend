import "./MenuPopup.css";
import React from "react";
import { Link } from "react-router-dom";

export function MenuPopup (props) {
  return (
        <div className={`menupopup ${
            props.isOpen ? "menupopup_opened" : ""
          }`}>
            <div className="menupopup__overlay" onClick={props.onClose}></div>
            <button
                type="button"
                className="menupopup__close-button"
                onClick={props.onClose}
            ></button>
            <Link className="menupopup__link menupopup__link_page_main" to="/">Главная</Link>
            <Link className="menupopup__link" to="/marking">Режим разметки</Link>
            <Link className="menupopup__link" to="/statistics">Статистика</Link>
        </div>
  );
}
