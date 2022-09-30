import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";

const OrderBook = () => {
  const { cryptoOrder, cryptoOrderSubmol } = useContext(AuthContext);
  const header1 = [
    `Volume ${cryptoOrderSubmol.symbol}`,
    `Price ${cryptoOrderSubmol.currency}`,
  ];
  return (
    <div className="order-book">
      <h2 className="heading">Order Book</h2>
      <table className="table">
        <thead>
          <tr>
            {header1?.map((data, index) => {
              return <th key={index}>{data}</th>;
            })}
          </tr>
        </thead>
        {/* loop */}
        <tbody>
          {cryptoOrder.ask?.map((data, index) => {
            let sorted = data.sort((a, b) => b - a);
            return (
              <tr key={index} className={`red-bg-${80 - index * 20}`}>
                <td>
                  <i className="red"></i>
                  {Number(sorted[1])?.toFixed(3)}
                </td>
                <td> {sorted[0]}</td>
              </tr>
            );
          })}
        </tbody>
        <thead className="ob-heading">
          <tr>
            <td>
              <span> Last Price </span>
              <span>
                {Number(cryptoOrderSubmol?.data?.closePrice)?.toFixed(3)}
              </span>
            </td>
            <td>
              <span> Change </span>
              <span> {cryptoOrderSubmol?.data?.priceChange} </span>
            </td>
          </tr>
        </thead>
        <tbody>
          {cryptoOrder.bid?.map((data, index) => {
            let sorted = data.sort((a, b) => b - a);
            return (
              <tr className={`green-bg-${80 - index * 20}`} key={index}>
                <td>
                  <i className="green"></i> {Number(sorted[1])?.toFixed(3)}
                </td>
                <td>{sorted[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
