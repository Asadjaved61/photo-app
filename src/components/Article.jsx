import React from "react";

const Article = ({ article, toggleArticle }) => {
  return (
    <div className="article" onClick={() => toggleArticle(article)}>
      <img src={article.url} alt={article.title} width="100%" />
      <h5>{article.title}</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
        voluptates mollitia autem minima iste eius ea harum, alias repellat cum
        earum! Maxime architecto, doloribus consectetur nesciunt error
        exercitationem totam earum.
      </p>
    </div>
  );
};

export default Article;
