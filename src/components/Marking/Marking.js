import './Marking.css'
import React from "react";
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

const productsListDiller = [
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
            <ProseptProductContainer productsList={productsList}/>
            <DillerProductContainer productsList={productsListDiller} onCardClick={props.onCardClick}/>
        </section>
    )
}