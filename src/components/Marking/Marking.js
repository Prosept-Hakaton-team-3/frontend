import './Marking.css'
import React from "react";
import { SearchForm } from '../SearchForm/SearchForm'
import { ProseptProductContainer } from '../ProseptProductContainer/ProseptProductContainer'
import { DillerProductContainer } from '../DillerProductContainer/DillerProductContainer'

const productsListDiller = [
    {
        name: "auto",
        vendorCode: 1,
        status: "Неопределен"
    }
]

const productsList = [
    {
        name: "auto1",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto2",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto3",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto4",
        vendorCode: 1,
        status: "Неопределен"
    },
    {
        name: "auto5",
        vendorCode: 1,
        status: "Неопределен"
    }
]

export function Marking(props) {
    
    return (
        <section className="marking">
            <SearchForm />
            <DillerProductContainer productsList={productsListDiller}/>
            <ProseptProductContainer productsList={productsList} onCardClick={props.onCardClick}/>
        </section>
    )
}