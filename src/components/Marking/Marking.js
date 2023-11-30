import './Marking.css'
import { SearchForm } from '../SearchForm/SearchForm'
import { DillerProductContainer } from '../DillerProductContainer/DillerProductContainer'
import { ProseptProductContainer } from '../ProseptProductContainer/ProseptProductContainer'

const productsList = [
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    }
]

export function Marking() {
    return (
        <section className="marking">
            <SearchForm />
            <ProseptProductContainer productsList={productsList}/>
            <DillerProductContainer />
        </section>
    )
}