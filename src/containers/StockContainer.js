import React, { Component } from "react";
import Stock from "../components/Stock";
import uuid from "uuid";

class StockContainer extends Component {
  stockRender = () => {
    return this.props.stocks.map(stock => {
      return (
        <Stock
          id={stock.id}
          key={uuid()}
          ticker={stock.ticker}
          name={stock.name}
          type={stock.type}
          price={stock.price}
          buyStock={this.props.buyStock}
          location={this.props.location}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <h2>Stocks</h2>

        {this.props.stocks ? this.stockRender() : null}
      </div>
    );
  }
}

export default StockContainer;
