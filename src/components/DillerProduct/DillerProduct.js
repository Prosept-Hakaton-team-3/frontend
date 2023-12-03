import './DillerProduct.css'

export function DillerProduct(props) {
    return (
        <div className="diller-product">
            <div className="diller-product__field">
                <p className="diller-product__key">Название:</p>
                <p className="diller-product__value"> {props.name}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Дата получения записи:</p> 
                <p className="diller-product__value">{props.date}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Статус:</p>
                <p className="diller-product__value">{props.status}</p>
            </div>
            <div className="diller-product__field">
                <p className="diller-product__key">Сопоставленный товар:</p>
                <p className="diller-product__value">{props.twin}</p>
            </div>
        </div>
    )
}