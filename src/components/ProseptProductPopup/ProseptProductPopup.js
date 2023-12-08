import "./ProseptProductPopup.css";
import React from "react";

export function ProseptProductPopup (props) {
  return (
        <div className={`prosept-product-popup ${props.product ? "prosept-product-popup_opened" : ""}`}>
            <div className="prosept-product-popup__overlay" onClick={props.onClose}></div>
            <div className="prosept-product-popup__wrap">
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Артикул товара:</p>
                  <p className="prosept-product-popup__value">{props.product?.article}</p>
                </div>
                {/* <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Код товара:</p>
                  <p className="prosept-product-popup__value">{props.product?.name}</p>
                </div> */}
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Название товара:</p>
                  <p className="prosept-product-popup__value">{props.product?.name}</p>
                </div>
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Стоимость:</p>
                  <p className="prosept-product-popup__value">{props.product?.cost}</p>
                </div>
                {/* <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Рекомендованная минимальная цена:</p>
                  <p className="prosept-product-popup__value">{props.product?.name}</p>
                </div> */}
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Рекомендованная цена:</p>
                  <p className="prosept-product-popup__value">{props.product?.recommended_price}</p>
                </div>
                {/* <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Категория товара:</p>
                  <p className="prosept-product-popup__value">{props.product?.name}</p>
                </div> */}
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Название товара на Озоне:</p>
                  <p className="prosept-product-popup__value">{props.product?.ozon_name}</p>
                </div>
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Название товара в 1С:</p>
                  <p className="prosept-product-popup__value">{props.product?.name_1c}</p>
                </div>
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Названиетовара на Wildberries:</p>
                  <p className="prosept-product-popup__value">{props.product?.wb_name}</p>
                </div>
                {/* <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Описание для Озон:</p>
                  <p className="prosept-product-popup__value">{props.product?.name}</p>
                </div> */}
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Артикул для Wildberries:</p>
                  <p className="prosept-product-popup__value">{props.product?.wb_article}</p>
                </div>
                <div className="prosept-product-popup__field">
                  <p className="prosept-product-popup__key">Артикул для Яндекс.Маркета:</p>
                  <p className="prosept-product-popup__value">{props.product?.ym_article}</p>
                </div>
            </div>
            <button
                type="button"
                className="menupopup__close-button"
                onClick={props.onClose}
            ></button>
        </div>
  );
}
