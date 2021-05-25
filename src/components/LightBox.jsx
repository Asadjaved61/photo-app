import React from "react";

const LightBox = ({ article, closeLightBox }) => {
  return (
    <div className="overlay">
      <div className="lightbox">
        <button onClick={closeLightBox}>X</button>
        <img src={article.url} alt={article.title} width="100%" height="200" />
        <h5>{article.title}</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          voluptates mollitia autem minima iste eius ea harum, alias repellat
          cum earum! Maxime architecto, doloribus consectetur nesciunt error
          exercitationem totam earum.
        </p>
      </div>
    </div>
  );
};

export default LightBox;
