import "./ProseptProductContainer.css";
import React from "react";
import { ProseptProduct } from "../ProseptProduct/ProseptProduct";

export function ProseptProductContainer (props) {
  function handleShowAllProducts(evt) {
    evt.preventDefault();
    props.onShowAllProducts();
  }

  function confirmMatch (evt) {
    evt.preventDefault();
    props.onConfirm();
  }

  return (
        <form className="prosept-product-container">
            <div className="prosept-product-container__wrap">
            {props.productsList && props.productsList.map((product, index) => (
                <ProseptProduct
                    key={index}
                    product={product}
                    name={product.name}
                    vendorCode={product?.vendorCode}
                    status={product.status}
                    onCardClick={props.onCardClick}
                />
            ))
            }
            </div>
            <div className="prosept-product-container__buttons">
                <button type="submit" onClick={confirmMatch} className="prosept-product-container__button">Подходит</button>
                <button type="submit" onClick={handleShowAllProducts} className="prosept-product-container__button">Разметить вручную</button>
                <button className="prosept-product-container__button">Отложить (удалить товар)</button>
                <button className="prosept-product-container__button">Перейти к следующему товару</button>
            </div>
        </form>
  );
}
