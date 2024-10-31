import React, { useState } from "react";
import "./wordsPage.css";
import { vocabulary } from "../../data";
import ListItem from "../../components/listItem/listItem";
import { Link } from "react-router-dom";

const WordsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVocablurary = vocabulary.filter(
    (item) =>
      item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.russian.some((translation) =>
        translation.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>

      <div className="word-search">
         <p class="control has-icons-left">
        <input
          class="input is-fullwidth"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
      </div>
     

      <div className="words__items has-background-black-ter">
        {filteredVocablurary.map((item) => (
          <Link to={`/words/${item.id}`}>
            <ListItem
              key={item.id}
              english={item.english}
              russian={item.russian}
              definition={item.definition}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WordsPage;
