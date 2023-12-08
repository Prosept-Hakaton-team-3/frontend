import "./Marking.css";
import React from "react";
import { ProseptProductContainer } from "../ProseptProductContainer/ProseptProductContainer";
import { DillerProductContainer } from "../DillerProductContainer/DillerProductContainer";

export function Marking (props) {
  return (
        <section className="marking">
            <DillerProductContainer
            dillerProductList={props.dillerProduct}
            />
            <ProseptProductContainer
            productsList={props.productsList}
            onCardClick={props.onCardClick}
            onShowAllProducts={props.onShowAllProducts}
            onConfirm={props.onConfirm}
            onNext={props.onNext}
            onDelete={props.onDelete}
            />
        </section>
  );
}
