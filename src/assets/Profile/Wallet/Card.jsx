import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { WallteContext } from "../../../context/Wallet";

const Card = () => {
  const { setDespositePage } = useContext(WallteContext);
  useEffect(() => {
    setDespositePage(data[0]);
  }, []);
  let data = [
    {
      symbol: "INR",
      name: "Rupees",
      img: "assets/img/icon/9.png",
      amt1: 35.4842458,
      amt2: 100.0,
    },
    {
      symbol: "BTC",
      name: "Bitcoin",
      img: "assets/img/icon/18.png",
      amt1: 1000,
      amt2: 10000,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      img: "assets/img/icon/1.png",
      amt1: 13.454845,
      amt2: 0.0,
    },
  ];
  return (
    <div className="col-md-12 col-lg-4">
      <div
        className="nav flex-column nav-pills"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((data, index) => {
          return (
            <a
              className="nav-link d-flex justify-content-between align-items-center"
              data-toggle="pill"
              href="#coinBNB"
              role="tab"
              aria-selected="true"
              key={index}
              onClick={() => setDespositePage(data)}
            >
              <div className="d-flex">
                <img src={data.img} alt="btc" />
                <div>
                  <h2>{data.symbol}</h2>
                  <p>{data.name}</p>
                </div>
              </div>
              <div>
                <h3>{data.amt1}</h3>
                <p className="text-right">
                  <i className="icon ion-md-lock"></i> {data.amt2}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
