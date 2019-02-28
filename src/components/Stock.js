import React from "react";

const Stock = props => {
  // console.log(props);
  return (
    <div>
      <div
        className="card"
        onClick={
          props.id ? e => props.buyStock(props.id, props.location) : null
        }
      >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
