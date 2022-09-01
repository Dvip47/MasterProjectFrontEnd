import React from "react";

const Card = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <div
        className="nav flex-column nav-pills"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          className="nav-link d-flex justify-content-between align-items-center active"
          data-toggle="pill"
          href="#coinBTC"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/18.png" alt="btc" />
            <div>
              <h2>BTC</h2>
              <p>Bitcoin</p>
            </div>
          </div>
          <div>
            <h3>4.5484254</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinETH"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/1.png" alt="btc" />
            <div>
              <h2>ETH</h2>
              <p>Ethereum</p>
            </div>
          </div>
          <div>
            <h3>13.454845</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinBNB"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/9.png" alt="btc" />
            <div>
              <h2>BNB</h2>
              <p>Binance</p>
            </div>
          </div>
          <div>
            <h3>35.4842458</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinTRX"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/6.png" alt="btc" />
            <div>
              <h2>TRX</h2>
              <p>Tron</p>
            </div>
          </div>
          <div>
            <h3>4.458941</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinEOS"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/2.png" alt="btc" />
            <div>
              <h2>EOS</h2>
              <p>Eosio</p>
            </div>
          </div>
          <div>
            <h3>33.478951</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinXMR"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/7.png" alt="btc" />
            <div>
              <h2>XMR</h2>
              <p>Monero</p>
            </div>
          </div>
          <div>
            <h3>99.465975</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
        <a
          className="nav-link d-flex justify-content-between align-items-center"
          data-toggle="pill"
          href="#coinKCS"
          role="tab"
          aria-selected="true"
        >
          <div className="d-flex">
            <img src="assets/img/icon/4.png" alt="btc" />
            <div>
              <h2>KCS</h2>
              <p>Kstarcoin</p>
            </div>
          </div>
          <div>
            <h3>114.57564</h3>
            <p className="text-right">
              <i className="icon ion-md-lock"></i> 0.0000000
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
