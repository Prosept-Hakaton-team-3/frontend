import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Marking } from "../Marking/Marking";
import { Statistics } from "../Statistics/Statistics";
import { Footer } from "../Footer/Footer";
import { MenuPopup } from "../MenuPopup/MenuPopup";
import { ProseptProductPopup } from "../ProseptProductPopup/ProseptProductPopup";
import api from "../../utils/Api";
import Context from "../../context/Context";

function App() {
  const [isMenuPopupOpen, showMenuPopup] = useState(false);
  const [selectedCard, showSelectedCard] = useState(null);
  const [dillerProduct, setDillerProduct] = useState(null);
  const [dillerProductForMatch, setDillerProductForMatch] = useState(null);
  const [proseptProduct, setProseptProduct] = useState(null);
  const [statistics, setStatistics] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    api.getProducts()
      .then((data) => {
        setDillerProduct(data.results.map((item) => ({
          product: item,
          date: item.date,
          dealer: item.dealer.name,
          dealer_id: item.dealer.id,
          id: item.id,
          key: item.product_key,
          name: item.product_name,
          price: item.price,
          url: item.product_url,
        })));
      })
      .catch(err => err);
  }, []);





  // useEffect(()=>{
  //   api.getOwnProducts()
  //     .then((data)=> {
  //       setProseptProduct(data.results.map((item)=>({
  //         product: item,
  //         article: item.article,
  //         name: item.name,
  //         ean_13: item.ean_13,
  //         ozon_name: item.ozon_name,
  //         name_1c: item.name_1c,
  //         wb_name: item.wb_name,
  //         ozon_article: item.ozon_article,
  //         wb_article: item.wb_article,
  //         ym_article: item.ym_article,
  //         cost: item.cost,
  //         recommended_price: item.recommended_price
  //       })));
  //     })
  //     .catch(err=> err);
  // },[]);


  function handleMenuClick() {
    showMenuPopup(true);
  }

  function closePopup() {
    showMenuPopup(false);

    showSelectedCard(null);
  }

  function handleCardClick(product) {
    showSelectedCard(product);
  }

  function handleShowAllProducts() {
    api.getOwnProducts()
      .then((data) => {
        setProseptProduct(data.results.map((item) => ({
          product: item,
          article: item.article,
          name: item.name,
          ean_13: item.ean_13,
          ozon_name: item.ozon_name,
          name_1c: item.name_1c,
          wb_name: item.wb_name,
          ozon_article: item.ozon_article,
          wb_article: item.wb_article,
          ym_article: item.ym_article,
          cost: item.cost,
          recommended_price: item.recommended_price
        })));
      })
      .catch(err => err);
  }

  function handleMark(product) {
    setDillerProductForMatch(product);
    api.getRecommendedProducts(product.id)
      .then((data) => {
        setProseptProduct(data.map((item) => ({
          product: item,
          article: item.article,
          name: item.name,
          ean_13: item.ean_13,
          ozon_name: item.ozon_name,
          name_1c: item.name_1c,
          wb_name: item.wb_name,
          ozon_article: item.ozon_article,
          wb_article: item.wb_article,
          ym_article: item.ym_article,
          cost: item.cost,
          recommended_price: item.recommended_price
        })));
      })
      .catch(err => err);
    navigate("/marking");
  }

  function handleConfirmMatch() {

  }

  function handleGoNext() {
    api.getProductsId(dillerProductForMatch.id + 1)
      .then((item) => {
        setDillerProductForMatch({
          product: item,
          date: item.date,
          dealer: item.dealer.name,
          dealer_id: item.dealer.id,
          id: item.id,
          key: item.product_key,
          name: item.product_name,
          price: item.price,
          url: item.product_url,
        });
      })
      .catch(err => err);
    api.getRecommendedProducts(dillerProductForMatch.id + 1)
      .then((data) => {
        setProseptProduct(data.map((item) => ({
          product: item,
          article: item.article,
          name: item.name,
          ean_13: item.ean_13,
          ozon_name: item.ozon_name,
          name_1c: item.name_1c,
          wb_name: item.wb_name,
          ozon_article: item.ozon_article,
          wb_article: item.wb_article,
          ym_article: item.ym_article,
          cost: item.cost,
          recommended_price: item.recommended_price
        })));
      })
      .catch(err => err);
  }

  function handleDeleteProduct() {
    api.deleteProductsId(dillerProductForMatch.id)
      .then((res) => res)
      .catch(err => err);
    handleGoNext();
    api.getProducts()
      .then((data) => {
        setDillerProduct(data.results.map((item) => ({
          product: item,
          date: item.date,
          dealer: item.dealer.name,
          dealer_id: item.dealer.id,
          id: item.id,
          key: item.product_key,
          name: item.product_name,
          price: item.price,
          url: item.product_url,
        })));
      })
      .catch(err => err);
  }

  useEffect(() => {
    api.getStatistics()
    .then((data) => {
      setStatistics({
        total: data.total,
        marked: data.marked,
        unmarked: data.unmarked,
      });
    })
    .catch(err => err);

  }, []);



  return (
    <Context.Provider value={null}>
      <div className="app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header onMenu={handleMenuClick}
              />
                <Main onMark={handleMark}
                  dillerProduct={dillerProduct}
                />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/marking"
            element={
              <>
                <Header onMenu={handleMenuClick} />
                <Marking
                  onCardClick={handleCardClick}
                  dillerProduct={dillerProductForMatch}
                  productsList={proseptProduct}
                  onShowAllProducts={handleShowAllProducts}
                  onConfirm={handleConfirmMatch}
                  onNext={handleGoNext}
                  onDelete={handleDeleteProduct}
                />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/statistics"
            element={
              <>
                <Header onMenu={handleMenuClick} />
                <Statistics
                statistics={statistics}
               />
                <Footer />
              </>
            }
          />
        </Routes>

        <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closePopup}

        />
        <ProseptProductPopup
          product={selectedCard}
          onClose={closePopup}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
