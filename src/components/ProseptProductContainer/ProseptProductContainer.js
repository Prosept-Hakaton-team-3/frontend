import './ProseptProductContainer.css'
import { useState, useEffect } from 'react';
import { ProseptProduct } from '../ProseptProduct/ProseptProduct'

export function ProseptProductContainer(props) {
    const [renderProductsList, setRenderProductsList] = useState([])
    useEffect(() => {
        if(props.productsList.length) {
            setRenderProductsList(props.productsList)
        }
    }, [props.productsList])

    return (
        <form className="prosept-product-container">
            <div className="prosept-product-container__wrap">
            {renderProductsList.map((product, index) => (
                <ProseptProduct
                    key={index}
                    product={product}
                    name={product.name}
                    vendorCode={product.vendorCode}
                    status={product.status}
                    onCardClick={props.onCardClick}
                />
            ))
            } 
            </div>
            <div className="prosept-product-container__buttons">
                <button className="prosept-product-container__button">Подходит</button>
                <button className="prosept-product-container__button">Разметить вручную</button>
                <button className="prosept-product-container__button">Отложить (удалить товар)</button>
                <button className="prosept-product-container__button">Перейти к следующему товару</button>
            </div>  
        </form>
    )
}