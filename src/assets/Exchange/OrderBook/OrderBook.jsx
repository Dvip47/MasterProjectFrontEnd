import React from "react";
import { useState } from "react";

const OrderBook = () => {
  const header1 = ["Price(BTC)", "Amount(ETH)", "Total(ETH)"];
  const body1 = [
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
  ];
  const header2 = ["Last Price", "USD", "Change"];
  const body2 = [{ lastPrice: "", usd: "", change: "1.253415" }, {}];
  const [color, setColor] = useState(100);
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
          {body1?.map((data, index) => {
            return (
              <tr key={index} className={`red-bg-${80 - index * 20}`}>
                <td>
                  <i className="red"></i> {data.price}
                </td>
                <td>{data.amount}</td>
                <td>{data.total}</td>
              </tr>
            );
          })}
        </tbody>
        {/* loop */}
        <thead className="ob-heading">
          <tr>
            {header2?.map((data, index) => {
              return (
                <td key={index}>
                  <span>{data}</span>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {body2?.map((data, index) => {
            return (
              <tr className="green-bg" key={index}>
                <td className="green">0.158373</td>
                <td>1.209515</td>
                <td>15.23248</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
