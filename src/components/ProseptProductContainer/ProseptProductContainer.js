import './ProseptProductContainer.css'
import { ProseptProduct } from '../ProseptProduct/ProseptProduct'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ProseptProductContainer({productsList}) {
    const [renderProductsList, setRenderProductsList] = useState([])
    useEffect(() => {
        if(productsList.length) {
            setRenderProductsList(productsList)
        }
    }, [productsList])
    const location = useLocation();

    return (
        <section className={`prosept-product-container ${(location.pathname === 'marking') && 'prosept-product-container_marking'}`}>
            {renderProductsList.map(product => (
                <ProseptProduct
                    name={product.name}
                    vendorCode={product.vendorCode}
                    status={product.status}
                />
            ))
            }
        </section>
    )
}