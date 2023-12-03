import './DillerProductContainer.css'
import { DillerProduct } from '../DillerProduct/DillerProduct'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function DillerProductContainer({productsList}) {
    const [renderProductsList, setRenderProductsList] = useState([])
    useEffect(() => {
        if(productsList.length) {
            setRenderProductsList(productsList)
        }
    }, [productsList])
    const location = useLocation();

    return (
        <section className={`diller-product-container ${(location.pathname === 'marking') && 'diller-product-container_marking'}`}>
            {renderProductsList.map((product, index) => (
                <DillerProduct
                    key={index}
                    name={product.name}
                    vendorCode={product.vendorCode}
                    status={product.status}
                />
            ))
            }
        </section>
    )
}