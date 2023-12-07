import "./DillerProductContainer.css";
import { DillerProduct } from "../DillerProduct/DillerProduct";
import React from "react";
import { useLocation } from "react-router-dom";

export function DillerProductContainer (props) {

  const location = useLocation();

  return (
        <section className={`diller-product-container ${(location.pathname === "/marking") && "diller-product-container_marking"}`}>
           {(location.pathname === "/") && Array.isArray(props.dillerProductList) && props.dillerProductList.map((product) => (
                <DillerProduct
                    key={product.id}
                    name={product.name}
                    date={product.date}
                    vendorCode={product.vendorCode}
                    status={product.status}
                    product={product}
                    onMark={props.onMark}
                />
           ))}
            {(location.pathname === "/marking") && <DillerProduct
            name={props?.dillerProductList?.name}
            date={props?.dillerProductList?.date}
            vendorCode={props?.dillerProductList?.vendorCode}
            status={props?.dillerProductList?.status}
            />}
        </section>
  );
}
