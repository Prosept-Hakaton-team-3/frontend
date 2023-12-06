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

  return (
        <section className={`diller-product-container ${(location.pathname === "/marking") && "diller-product-container_marking"}`}>
           {renderProductsList.map((product, index) => (
                <DillerProduct
                    key={index}
                    product={product}
name={product.name}
                    vendorCode={product.vendorCode}
                    status={product.status}
                    onMark={props.onMark}
                />
           ))}
            {(location.pathname === "/marking") && <DillerProduct
            name={props?.productsList?.name}
            vendorCode={props?.productsList?.vendorCode}
            status={props?.productsList?.status}
            />}
        </section>
  );
}
