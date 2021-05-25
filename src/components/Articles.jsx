import React, { useState, useEffect } from "react";
import AppService from "../services/app.service";
import Article from "./Article";
import LightBox from "./LightBox";

const appService = new AppService();

const Articles = () => {
  const [articles, setArticles] = useState(null);
  const [activeArticle, setActiveArticle] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    appService
      .getArticles()
      .then((response) => response.json())
      .then((articles) => setArticles(articles.slice(0, 14)));
  }, [articles]);

  const toggleArticle = (article) => {
    setActiveArticle(article);
    setToggleModal(!toggleModal);
  };

  const onClose = () => {
    setToggleModal(false);
    setActiveArticle(null);
  };

  return (
    <div className="wrapper">
      <div className="articles">
        {articles &&
          articles.map((article, index) => (
            <Article
              key={index}
              article={article}
              toggleArticle={toggleArticle}
            />
          ))}
      </div>
      {toggleModal && (
        <LightBox article={activeArticle} closeLightBox={onClose} />
      )}
    </div>
  );
};

export default Articles;
