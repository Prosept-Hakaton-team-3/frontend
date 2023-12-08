import "./DillerProduct.css";
import { useLocation } from "react-router-dom";
import React from "react";

export function DillerProduct (props) {
  function handleMark (evt) {
    evt.preventDefault();
    props.onMark(props.product);
  }
  const location = useLocation();
  console.log(props);
  return (
        <div className="diller-product">
            <div className="diller-product__field">
                <p className="diller-product__key">Название:</p>
                <p className="diller-product__value">{props.name}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Продавец:</p>
                <p className="diller-product__value">{props.product?.dealer || props.dealer?.name}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Дата получения записи:</p>
                <p className="diller-product__value">{props.date}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Статус:</p>
                <p className="diller-product__value">{props.status ? "Подтвержден" : "Не определен"}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Сопоставленный товар:</p>
                <p className="diller-product__value">{props.product?.twin || props?.twin}</p>
            </div>
            <form method="GET" className={`diller-product__form ${(location.pathname === "/marking") && "diller-product__form_marking"}`}>
                <input className="diller-product__input" type="number" required min={1} max={50} title="Количество отображаемых вариантов соответсвия"/>
                <p className="diller-product__subnumb">Колличество отображаемых вариантов соответствия</p>
                <button className="diller-product__submit-button" type="submit" onClick={handleMark} title="Перейти к разметке"></button>
                <p className="diller-product__subtext">Перейти к разметке</p>
            </form>
        </div>
  );
}
