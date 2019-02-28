import React, { Component } from "react";
import Stock from "../components/Stock";
import uuid from "uuid";

class PortfolioContainer extends Component {
  stockRender = () => {
    return this.props.portfolio.map(stock => {
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
        <h2>My Portfolio</h2>
        {this.stockRender()}
      </div>
    );
  }
}

export default PortfolioContainer;
