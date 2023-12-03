import './Filters.css'

export function Filters() {
    return (
        <form className="filters">
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="diller-select">Продавец</label>
                <select name="diller" id="diller-select">
                    <option value="">-- Выберите продавца --</option>
                    <option value="akson">Akson</option>
                    <option value="bafus">Bafus</option>
                    <option value="castorama">Castorama</option>
                    <option value="cubatora">Cubatora</option>
                    <option value="komus">Komus</option>
                    <option value="megastroy">Megastroy</option>
                    <option value="onlinetrade">OnlineTrade</option>
                </select>
            </div>
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="status-select">Статус</label>
                <select name="status" id="status-select">
                    <option value="">-- Выберите статус товара --</option>
                    <option value="confirmed">Подтвержден</option>
                    <option value="denied">Отвергнут</option>
                    <option value="undefined">Неопределен</option>
                </select>
            </div>
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="date-select">Сортировка по дате</label>
                <select name="date" id="date-select">
                    <option value="">-- Выберите порядок --</option>
                    <option value="new">Сначала новые</option>
                    <option value="old">Сначала старые</option>
                </select>
            </div>
            <button className="filters__submit-button" type="submit">Применить</button>
        </form>
    )
}