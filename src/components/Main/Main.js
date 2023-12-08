import "./Main.css";
import { DillerProductContainer } from "../DillerProductContainer/DillerProductContainer";
import { Filters } from "../Filters/Filters";
import React from "react";

export function Main (props) {
  return (
        <main className="main">
            <Filters />
            <DillerProductContainer
            dillerProductList={props.dillerProduct}
            onMark={props.onMark}
            onCalc={props.onCalc}
            />
        </main>
  );
}
