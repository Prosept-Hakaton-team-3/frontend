import "./MenuPopup.css";
import React from "react";

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
            <a className="menupopup__link menupopup__link_page_main" href="/">Главная</a>
            <a className="menupopup__link" href="/marking">Режим разметки</a>
            <a className="menupopup__link" href="/statistics">Статистика</a>
        </div>
  );
}
