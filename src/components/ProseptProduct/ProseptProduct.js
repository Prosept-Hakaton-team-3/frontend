import './ProseptProduct.css'

export function ProseptProduct(props) {
    function handleClick() {
        props.onCardClick(props.product);
    }

    return (
        <div className="prosept-product">
            <input id="radio" type="radio" name="radio"/>
            <label htmlFor="radio" className="prosept-product__field">Название: {props.name}</label>
            <button className="prosept-product__view-button" type="button" onClick={handleClick} title="Данные товара"></button>
        </div>
    )
}