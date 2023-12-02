import './DillerProductPopup.css'

export function DillerProductPopup(props) {
    return (
        <dev className={`diller-product-popup ${props.product ? "diller-product-popup_opened" : ""}`}>
            <div className="diller-product-popup__overlay" onClick={props.onClose}></div>
            <div className="diller-product-popup__wrap">
                <p className="diller-product-popup__field">Артикул товара: {props.product?.name}</p>
                <p className="diller-product-popup__field">Код товара: {props.product?.name}</p>
                <p className="diller-product-popup__field">Название товара: {props.product?.name}</p>
                <p className="diller-product-popup__field">Стоимость: {props.product?.name}</p>
                <p className="diller-product-popup__field">Рекомендованная минимальная цена: {props.product?.name}</p>
                <p className="diller-product-popup__field">Рекомендованная цена: {props.product?.name}</p>
                <p className="diller-product-popup__field">Категория товара: {props.product?.name}</p>
                <p className="diller-product-popup__field">Название товара на Озоне: {props.product?.name}</p>
                <p className="diller-product-popup__field">Название товара в 1С: {props.product?.name}</p>
                <p className="diller-product-popup__field">Названиетовара на Wildberries: {props.product?.name}</p>
                <p className="diller-product-popup__field">Описание для Озон: {props.product?.name}</p>
                <p className="diller-product-popup__field">Артикул для Wildberries: {props.product?.name}</p>
                <p className="diller-product-popup__field">Артикул для Яндекс.Маркета: {props.product?.name}</p>
            </div>
            <button
                type="button"
                className="menupopup__close-button"
                onClick={props.onClose}
            ></button>
        </dev>
    )
}