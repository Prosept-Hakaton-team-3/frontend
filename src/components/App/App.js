import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Marking } from '../Marking/Marking';
import { Footer } from '../Footer/Footer';
import { MenuPopup } from '../MenuPopup/MenuPopup'

function App() {
  const [isMenuPopupOpen, showMenuPopup] = React.useState(false);
  function handleMenuClick() {
    showMenuPopup(true);
  }
  function closePopup() {
    showMenuPopup(false)
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
            <Marking />
            <Footer />
          </>
        }
        />
      </Routes>

      <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closePopup}
      />
    </div>
  );
}

export default App;
