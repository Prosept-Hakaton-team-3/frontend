import "./App.css";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Marking } from "../Marking/Marking";
import { Statistics } from "../Statistics/Statistics";
import { Footer } from "../Footer/Footer";
import { MenuPopup } from "../MenuPopup/MenuPopup";
import { ProseptProductPopup } from "../ProseptProductPopup/ProseptProductPopup";

function App () {
  const [isMenuPopupOpen, showMenuPopup] = useState(false);
  const [selectedCard, showSelectedCard] = useState(null);
  const [dillerProduct, setDillerProduct] = useState(null);
  const navigate = useNavigate();

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
  return (
    <div className="app">
      <Routes>
        <Route
        exact
        path="/"
        element = {
          <>
            <Header onMenu={handleMenuClick}/>
            <Main onMark={handleMark}/>
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
              dillerProductList={dillerProduct}
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
  );
}

export default App;
