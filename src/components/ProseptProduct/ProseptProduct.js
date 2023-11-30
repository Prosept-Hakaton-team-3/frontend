import './ProseptProduct.css'

export function ProseptProduct(props) {
    return (
        <div className="prosept-product">
            <p className="prosept-product__field">Название: {props.name}</p>
            <p className="prosept-product__field">Артикул: {props.vendorCode}</p>
            <p className="prosept-product__field">Статус: {props.status}</p>
        </div>
    )
}