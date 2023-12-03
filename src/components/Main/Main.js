import './Main.css'
import { DillerProductContainer } from '../DillerProductContainer/DillerProductContainer'
import { Filters } from '../Filters/Filters'

const productsList = [
    {
        name: "Ядохимикаты",
        vendorCode: 23,
        status: "Неопределен"
    },
    {
        name: "Чистящее средство",
        vendorCode: 56,
        status: "Неопределен"
    },
    {
        name: "Антисептик",
        vendorCode: 12,
        status: "Неопределен"
    },
    {
        name: "Порошок Стиральный",
        vendorCode: 32,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    },

]

export function Main() {
    return (
        <main className="main">
            <Filters />
            <DillerProductContainer productsList={productsList}/>
        </main>
    )
}