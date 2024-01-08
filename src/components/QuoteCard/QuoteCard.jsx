import React from "react";
import "./QuoteCard.css";

const QuoteCard = () => {
  return (
    <div className="quotecard-container">
      <div className="quotecard-left-container">
        <h1>Reconnect with your mind and body.</h1>
      </div>
      <div className="quotecard-right-container">
        <p className="quotecard-right-description">“Keep close to Nature's heart...and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.”</p>
        <div className="dash"></div>
        <h2 className="quotecard-right-author">John Muir</h2>
      </div>
    </div>
  );
};

export default QuoteCard;

