import React from "react";
import Data from "../Data"
import { useParams } from "react-router-dom";

export default function Stock() {
    const { symbol } = useParams();
    const stock = Data.find((item) => item.symbol === symbol);
  
    // const oneStock = Data.find(item => item.symbol === props.match.params.symbol)[0]
    return (
        <div>
            <h4>{stock.name}</h4>
            <h5>{stock.symbol}</h5>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p> 
        </div>
    ) 
}

