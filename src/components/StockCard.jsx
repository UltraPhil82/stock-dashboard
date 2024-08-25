import React from "react";
import "../styling/StockCard.css"
import { useState } from "react";

function StockCard (props) {

  let idPL = "pos-pl"

  if (props.profitloss < 0) {
      idPL = "neg-pl"
  }

  const [{items}, setItems] = useState({ items: [] });

  const addItem = () => {
    items.push(
    <div key={items.length} className="stock-card">
      <h4>Symbol: {props.symbol} </h4> 
      <p>Quantity: {props.qty} </p>
      <p>Purchase Price: {props.pprice}</p> 
      <p>Current Price: {props.currprice} </p>
      <p id={idPL}>Profit/Loss: {props.profitloss} </p>
    </div>
    );
    setItems({ items: [...items] });
  };

  return (
    <>
      <div> 
        <button onClick={addItem}>Add Stock</button>
      </div>
      <div className="card-items">
        {items}
      </div>
    </>
  );
}

export default StockCard
