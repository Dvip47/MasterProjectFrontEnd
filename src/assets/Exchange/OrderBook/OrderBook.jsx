import React from "react";
import { useState } from "react";

const OrderBook = () => {
  const header1 = ["Price(BTC)", "Amount(ETH)", "Total(ETH)"];
  const body1 = [
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
    { price: "0.022572", amount: "1.253415", total: "1.253648" },
  ];
  const header2 = [];
  const body2 = [{ lastPrice: "", usd: "", change: "1.253415" }];
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
                <tr>
                  <td>
                    <i className="red"></i> {data.price}
                  </td>
                  <td>{data.amount}</td>
                  <td>{data.total}</td>
                </tr>
              </tr>
            );
          })}
        </tbody>
        {/* loop */}
        <thead className="ob-heading">
          <tr>
            <td>
              <span>Last Price</span>
              0.020367
            </td>
            <td>
              <span>USD</span>
              148.65
            </td>
            <td className="red">
              <span>Change</span>
              -0.51%
            </td>
          </tr>
        </thead>
        {/* loop */}
        <tbody>
          <tr className="green-bg">
            <td className="green">0.158373</td>
            <td>1.209515</td>
            <td>15.23248</td>
          </tr>
          <tr className="green-bg-5">
            <td className="green">0.020851</td>
            <td>1.206245</td>
            <td>15.25458</td>
          </tr>
          <tr className="green-bg-8">
            <td className="green">0.025375</td>
            <td>1.205715</td>
            <td>15.65648</td>
          </tr>
          <tr className="green-bg-10">
            <td className="green">0.020252</td>
            <td>1.205495</td>
            <td>15.24548</td>
          </tr>
          <tr className="green-bg-20">
            <td className="green">0.020373</td>
            <td>1.205415</td>
            <td>15.25648</td>
          </tr>
          <tr className="green-bg-40">
            <td className="green">0.020156</td>
            <td>1.207515</td>
            <td>15.28948</td>
          </tr>
          <tr className="green-bg-60">
            <td className="green">0.540375</td>
            <td>1.205915</td>
            <td>15.25748</td>
          </tr>
          <tr className="green-bg-80">
            <td className="green">0.020372</td>
            <td>1.205415</td>
            <td>15.25648</td>
          </tr>
        </tbody>
        {/* loop */}
      </table>
    </div>
  );
};

export default OrderBook;
