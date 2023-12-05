import './Statistics.css'

export function Statistics() {
    return (
        <section className="statistics">
            <h1 className="statistics__header">Статистика</h1>
            <article className="statistics__wrap">
                <article className="statistics__chunk">
                    <h2>Статистика по базе данных</h2>
                    <p>Всего товаров доступных для разметки:</p>
                    <p>Товаров размечено:</p>
                    <p>Товаров НЕ размечено:</p>
                </article>
                <article className="statistics__chunk">
                    <h2>Статистика по текущему сеансу</h2>
                    <p>Товаров для сопоставления:</p>
                    <p>Товаров проверено:</p>
                    <p>Товаров не проверено</p>
                    <p>Товаров сопоставлено:</p>
                    <p>Сколько отложено:</p>
                    <p>Сколько товаров точно не подошло:</p>
                </article>
            </article>
        </section>
    )
}