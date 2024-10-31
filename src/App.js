// App.js
import React from "react";
import './App.css';
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Route,Routes} from 'react-router-dom';
import HomePage from "./blocks/homePage/homePage";
import WordPage from "./blocks/wordPage/wordPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/words/:id" element={<WordPage />} />
    </Routes>
  );
};

export default App;
