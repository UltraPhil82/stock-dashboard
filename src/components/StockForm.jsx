import React from "react";
import "../styling/StockForm.css"
import { useEffect, useState } from 'react'
import StockCard from "./StockCard";

function StockForm () {

    const [sym, setSymbol] = useState()
    const [qty, setQty] = useState()
    const [pprice, setPPrice] = useState()
    const [currprice, setCurrPrice] = useState()
    const [ploss, setPLoss] = useState()


    /* Get current price of stock */
    useEffect(() => {
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${sym}&apikey=02RU82IICSHJZ15L`)
        //fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo')
          .then(response => response.json())
          .then(data => {
            setCurrPrice(data["Global Quote"]["05. price"]);
          })
      }, [qty, pprice]) 
    
    /* Handle Change Events */
    const handleSymChg = (event) => {
        setSymbol(event.target.value)
    }

    const handleQtyChg = (event) => {
        setQty(event.target.value)
        setPLoss(Math.round(event.target.value*(currprice - pprice)))
    }

    const handlePPriceChg = (event) => {
        setPPrice(event.target.value)
        setPLoss(Math.round(qty*(currprice - event.target.value)))
    }

    console.log(sym, qty, pprice, currprice, ploss)

    return (
        <>
            <div className = "stock-form">
                <input
                    type="text" 
                    name="symbol"
                    placeholder="Stock Symbol"
                    value={sym}
                    onChange={handleSymChg}
                />
                <input
                    type="text" 
                    name="quantity"
                    placeholder="Quantity"
                    value={qty}
                    onChange={handleQtyChg}
                />
                <input
                    type="text" 
                    name="pprice"
                    placeholder="Purchase Price"
                    value={pprice}
                    onChange={handlePPriceChg}
                />
            </div>
                <StockCard 
                    symbol = {sym} 
                    qty = {qty}
                    pprice = {pprice}
                    currprice= {currprice}
                    profitloss = {ploss}
                />
        </>
    )
}

export default StockForm