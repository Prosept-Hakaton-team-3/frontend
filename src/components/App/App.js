import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Marking } from '../Marking/Marking';
import { Footer } from '../Footer/Footer';
import { MenuPopup } from '../MenuPopup/MenuPopup'
import { DillerProductPopup } from '../DillerProductPopup/DillerProductPopup';

function App() {
  const [isMenuPopupOpen, showMenuPopup] = React.useState(false);
  const [selectedCard, showSelectedCard] = React.useState(null);
  function handleMenuClick() {
    showMenuPopup(true);
  }
  function closePopup() {
    showMenuPopup(false)
    showSelectedCard(null)
  }
  

    function handleCardClick(product) {
        showSelectedCard(product);
        console.log(product)
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
            <Main />
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
            <Marking onCardClick={handleCardClick}/>
            <Footer />
          </>
        }
        />
      </Routes>

      <MenuPopup
        isOpen={isMenuPopupOpen}
        onClose={closePopup}
      />
      <DillerProductPopup
        product={selectedCard}
        onClose={closePopup}
       />
    </div>
  );
}

export default App;
