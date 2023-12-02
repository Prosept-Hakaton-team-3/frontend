import './DillerProduct.css'

export function DillerProduct(props) {
    function handleClick() {
        props.onCardClick(props.product);
    }

    return (
        <div className="diller-product">
            <input id="radio" type="radio" name="radio"/>
            <p for="radio" className="diller-product__field">Название: {props.name}</p>
            <button className="diller-product__view-button" type="button" onClick={handleClick}></button>
        </div>
    )
}