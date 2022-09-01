import React from "react";

const Deposite = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wallet Deposit Address</h5>
        <div className="row wallet-address">
          <div className="col-md-8">
            <p>
              Deposits to this address are unlimited. Note that you may not be
              able to withdraw all of your funds at once if you deposit more
              than your daily withdrawal limit.
            </p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                defaultValue="Ad87deD4gEe8dG57Ede4eEg5dREs4d5e8f4e"
              />
              <div className="input-group-prepend">
                <button className="btn btn-primary">COPY</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src="assets/img/qr-code-dark.svg" alt="qr-code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposite;
