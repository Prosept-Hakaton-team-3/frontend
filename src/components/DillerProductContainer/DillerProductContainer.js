import './DillerProductContainer.css'
import { useState, useEffect } from 'react';
import { DillerProduct } from '../DillerProduct/DillerProduct'

export function DillerProductContainer(props) {
    const [renderProductsList, setRenderProductsList] = useState([])
    useEffect(() => {
        if(props.productsList.length) {
            setRenderProductsList(props.productsList)
        }
    }, [props.productsList])

    return (
        <form className="diller-product-container">
            {renderProductsList.map(product => (
                <DillerProduct
                    product={product}
                    name={product.name}
                    vendorCode={product.vendorCode}
                    status={product.status}
                    onCardClick={props.onCardClick}
                />
            ))
            } 
            <dev className="diller-product-container__buttons">
                <button className="diller-product-container__button">Да</button>
                <button className="diller-product-container__button">Нет</button>
                <button className="diller-product-container__button">Отложить</button>
            </dev>  
        </form>
    )
}