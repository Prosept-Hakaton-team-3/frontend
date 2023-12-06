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

function App () {
  const [isMenuPopupOpen, showMenuPopup] = useState(false);
  const [selectedCard, showSelectedCard] = useState(null);
  const [dillerProduct, setDillerProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(()=> {
    api.getProducts()
      .then((data)=>{
        setDillerProduct(data.results.map((item)=>({
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
      .catch(err=> err);
  },[]);




  function handleMenuClick () {
    showMenuPopup(true);
  }

  function closePopup () {
    showMenuPopup(false);
    showSelectedCard(null);
  }

  function handleCardClick (product) {
    showSelectedCard(product);
  }

  function handleMark (product) {
    setDillerProduct(product);
      navigate("/marking");
  }

  console.log(dillerProduct);
  return (
    <Context.Provider value={null}>
    <div className="app">
      <Routes>
        <Route
        exact
        path="/"
        element = {
          <>
            <Header onMenu={handleMenuClick}/>
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
        element = {
          <>
            <Header onMenu={handleMenuClick}/>
            <Marking
              onCardClick={handleCardClick}
              dillerProduct={dillerProduct}
            />
            <Footer />
          </>
        }
        />
        <Route
        exact
        path="/statistics"
        element = {
          <>
            <Header onMenu={handleMenuClick}/>
            <Statistics />
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
