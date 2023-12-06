import "./DillerProductContainer.css";
import { DillerProduct } from "../DillerProduct/DillerProduct";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function DillerProductContainer (props) {
  const [renderProductsList, setRenderProductsList] = useState([]);
  useEffect(() => {
    if (props.dillerProductList) {
      setRenderProductsList(props.dillerProductList);
    }
  }, [props.dillerProductList]);
  const location = useLocation();
console.log(props.dillerProductList);
  return (
        <section className={`diller-product-container ${(location.pathname === "/marking") && "diller-product-container_marking"}`}>
           {renderProductsList.map((product) => (
                <DillerProduct
                    key={product.id}
                    name={product.name}
                    date={product.date}
                    vendorCode={product.vendorCode}
                    status={product.status}
                    onMark={props.onMark}
                />
           ))}
            {(location.pathname === "/marking") && <DillerProduct
            name={props?.dillerProductList?.name}
            vendorCode={props?.dillerProductList?.vendorCode}
            status={props?.dillerProductList?.status}
            />}
        </section>
  );
}
