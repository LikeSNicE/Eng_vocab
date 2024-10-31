import React from "react";
import "./wordPage.css";
import { Link, useParams } from "react-router-dom";
import { vocabulary } from "../../data";

const WordPage = () => {
  const { id } = useParams();
  const word = vocabulary.find((item) => item.id === id);
  return (
    <div>
      <div className="container">
        <article class="message mt-4">
          <div class="message-header">
            <h1 className="title is-1">{word.english}</h1>
          </div>
          <div class="message-body">
            <p className="message-definition">
              <i>definition :</i> {word.definition}
            </p>
            <div className="message-translate">
              <p className="">
                Перевод слово <i>{word.english}</i> на русский :
              </p>
              <div className="message-translate-words">
                {word.russian.map((item) => (
                  <li className="tranlate-word-item">{item}</li>
                ))}
              </div>
            </div>

            <p className="title is-3">sentences : </p>
            <table class="table is-bordered is-striped is-fullwidth mt-3 table-word">
              <thead>
                <tr>
                  <th className="table-header__name is-link title is-4">
                    English
                  </th>
                  <th className="table-header__name  title is-4">Русский</th>
                </tr>
              </thead>
              <tbody>
                {word.sentences.english.map((englishSentence, index) => (
                  <tr key={index}>
                    <td>
                      <p>{englishSentence}</p>
                    </td>
                    <td>
                      <p>{word.sentences.russian[index]}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <button class="button is-light button-link">
          <Link to={"/"}>Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default WordPage;
