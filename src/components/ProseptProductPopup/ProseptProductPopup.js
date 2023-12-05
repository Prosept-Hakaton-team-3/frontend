import "./ProseptProductPopup.css";
import React from "react";

export function ProseptProductPopup (props) {
  return (
        <div className={`prosept-product-popup ${props.product ? "prosept-product-popup_opened" : ""}`}>
            <div className="prosept-product-popup__overlay" onClick={props.onClose}></div>
            <div className="prosept-product-popup__wrap">
                <p className="prosept-product-popup__field">Артикул товара: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Код товара: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Название товара: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Стоимость: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Рекомендованная минимальная цена: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Рекомендованная цена: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Категория товара: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Название товара на Озоне: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Название товара в 1С: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Названиетовара на Wildberries: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Описание для Озон: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Артикул для Wildberries: {props.product?.name}</p>
                <p className="prosept-product-popup__field">Артикул для Яндекс.Маркета: {props.product?.name}</p>
            </div>
            <button
                type="button"
                className="menupopup__close-button"
                onClick={props.onClose}
            ></button>
        </div>
  );
}
