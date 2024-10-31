import React from 'react';
import './homePage.css';
import WordsPage from '../wordsPage/wordsPage';


const HomePage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title pt-4">English vocabulary</h1>
        <WordsPage/>
      </div>
    </div>
  );
};

export default HomePage;