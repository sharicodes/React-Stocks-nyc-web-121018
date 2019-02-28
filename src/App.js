import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      portfolio: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(stocks => {
        this.setState({
          stocks: stocks,
          portfolio: []
        });
      });
  }

  buyStock = (id, location) => {
    console.log(id);

    if (location === "stocks") {
      let filteredStocks = this.state.stocks.filter(stock => stock.id === id);
      console.log(filteredStocks[0]);

      let remainingStocks = this.state.stocks.filter(stock => stock.id !== id);
      console.log(remainingStocks);

      this.setState({
        portfolio: [filteredStocks[0], ...this.state.portfolio],
        stocks: remainingStocks
      });
    } else if (location === "portfolio") {
      let filteredStocks = this.state.portfolio.filter(
        stock => stock.id === id
      );
      console.log(filteredStocks[0]);

      let remainingPortfolio = this.state.portfolio.filter(
        stock => stock.id !== id
      );
      console.log(remainingPortfolio);

      this.setState({
        portfolio: remainingPortfolio,
        stocks: [filteredStocks[0], ...this.state.stocks]
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.state.stocks}
          buyStock={this.buyStock}
          portfolio={this.state.portfolio}
        />
      </div>
    );
  }
}

export default App;
