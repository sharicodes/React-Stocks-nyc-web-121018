import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              buyStock={this.props.buyStock}
              location={"stocks"}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              buyStock={this.props.buyStock}
              location={"portfolio"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
