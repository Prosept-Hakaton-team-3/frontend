import "./Filters.css";
import React from "react";
export function Filters () {
  return (
        <form className="filters">
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="diller-select">Продавец</label>
                <select name="diller" id="diller-select">
                    <option value="">-- Выберите продавца --</option>
                    <option value="moiviborwb">Moi_vibor_WB</option>
                    <option value="akson">Akson</option>
                    <option value="bafus">Bafus</option>
                    <option value="castorama">Castorama</option>
                    <option value="cubatora">Cubatora</option>
                    <option value="komus">Komus</option>
                    <option value="megastroy">Megastroy</option>
                    <option value="sdvor">sdvor</option>
                    <option value="simaland">simaLand</option>
                    <option value="vegosm">VegosM</option>
                    <option value="vseinstrumeni">Vse_instrumeni</option>
                    <option value="vimos">Vimos</option>
                    <option value="baucenter">Baucenter</option>
                    <option value="leroymerlin">Leroy_Merlin</option>
                    <option value="spbozon">Ğœasterstroy_spb_OZON</option>
                    <option value="unicleaner">Unicleaner_OZON</option>
                </select>
            </div>
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="status-select">Статус</label>
                <select name="status" id="status-select">
                    <option value="">-- Выберите статус товара --</option>
                    <option value="confirmed">Подтвержден</option>
                    <option value="undefined">Не определен</option>
                </select>
            </div>
            <div className="filters__wrap">
                <label className="filters__label" htmlFor="date-select">Сортировка по дате</label>
                <select name="date" id="date-select">
                    <option value="">-- Выберите дату --</option>
                    <option value="11.07.2023">11.07.2023</option>
                    <option value="31.07.2023">31.07.2023</option>
                    <option value="12.07.2023">12.07.2023</option>
                    <option value="4.07.2023">14.07.2023</option>
                    <option value="17.07.2023">17.07.2023</option>
                    <option value="13.07.2023">13.07.2023</option>
                    <option value="18.07.2023">18.07.2023</option>
                    <option value="19.07.2023">19.07.2023</option>
                    <option value="21.07.2023">21.07.2023</option>
                    <option value="24.07.2023">24.07.2023</option>
                    <option value="25.07.2023">25.07.2023</option>
                    <option value="26.07.2023">26.07.2023</option>
                    <option value="27.07.2023">27.07.2023</option>
                    <option value="28.07.2023">28.07.2023</option>
                </select>
            </div>
            <button className="filters__submit-button" type="submit">Применить</button>
        </form>
  );
}
