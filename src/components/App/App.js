import './App.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
        exact
        path="/"
        element = {
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
