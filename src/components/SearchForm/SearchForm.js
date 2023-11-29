import './SearchForm.css'

export function SearchForm() {
    return (
        <section className="searchform" name="searchform">
            <form className="searchform__form">
                <input
                className="searchform__bar"
                name="searchform-bar"
                type="text"
                placeholder="Товар"
                required
                />
                <button className="searchform__button" type="submit">
                </button>
            </form>
        </section>
    )
}