import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { CoinContext } from "../../context/CoinsContext";
import { UserContext } from "../../context/UserContext";

const Withdraw = () => {
  const { coinBalance, totalUserBalance, callCoinBalance } =
    useContext(CoinContext);
  const { userBank, callUserBank } = useContext(UserContext);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    callUserBank(userData);
    callCoinBalance(userData);
  }, [userData]);
  const [withdrawType, setWithdrawType] = useState("INR");
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ">
        <div className="card ps ps--active-y">
          <div className="card-header">
            <h4 className="card-title">Your Asset </h4>
          </div>
          <div className="card-body balance-widget">
            <div className="total-balance">
              <h3>{totalUserBalance}</h3>
              <h6>Total Balance</h6>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Size</th>
                    <th>INR</th>
                  </tr>
                </thead>
                <tbody>
                  {coinBalance
                    ?.sort((a, b) => b?.total - a?.total)
                    ?.map((data, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() =>
                            setWithdrawType(
                              data?.symbol?.replace("INR", "") || "INR"
                            )
                          }
                        >
                          <td>{data?.symbol?.replace("INR", "") || "INR"}</td>
                          <td>{data?.balance}</td>
                          <td>{data?.total} INR</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Withdraw</h4>
          </div>
          {withdrawType == "INR" ? (
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <form action="#" className="py-5">
                    <div className="form-group row align-items-center">
                      <div className="col-sm-4">
                        <label for="inputEmail3" className="col-form-label">
                          Bank
                          <br />
                          <small>Select Bank To Withdraw</small>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text bg-primary">
                              <i className="mdi mdi-bank text-white"></i>
                            </label>
                          </div>
                          <select className="form-control" name="bank">
                            <option value="">Select</option>
                            {userBank?.map((data, index) => {
                              return (
                                <option key={index} value={data?.accountNumber}>
                                  {data?.bankName}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row align-items-center">
                      <div className="col-sm-4">
                        <label for="inputEmail3" className="col-form-label">
                          Amount INR
                          <br />
                          <small>Maximum amount withdrawable: 0 INR</small>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text bg-primary text-white">
                              ₹
                            </label>
                          </div>
                          <input
                            type="text"
                            className="form-control text-right"
                            placeholder="5000 INR"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <button className="btn btn-primary">Withdraw Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <form action="#" className="py-5">
                    <div className="form-group row align-items-center">
                      <div className="col-sm-4">
                        <label for="inputEmail3" className="col-form-label">
                          DestinationAddress
                          <br />
                          <small>Please double check this address</small>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text  bg-primary">
                              <i className="mdi mdi-currency-usd fs-18 text-white"></i>
                            </label>
                          </div>
                          <input
                            type="text"
                            className="form-control text-right"
                            placeholder="5000 USD"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row align-items-center">
                      <div className="col-sm-4">
                        <label for="inputEmail3" className="col-form-label">
                          Amount BTC
                          <br />
                          <small>Maximum amount withdrawable: 0 BTC</small>
                        </label>
                      </div>
                      <div className="col-sm-8">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <label className="input-group-text bg-primary">
                              <i className="cc BTC-alt text-white"></i>
                            </label>
                          </div>
                          <input
                            type="text"
                            className="form-control text-right"
                            placeholder="5000 USD"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row align-items-center">
                      <div className="col-sm-6">
                        <label for="inputEmail3" className="col-form-label">
                          Network
                          <br />
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <h4 className="text-right">BEP20</h4>
                      </div>
                    </div>
                    <small>
                      Please cross-check the destination address. Withdrawals to
                      Smart Contract Addresses, payments or participation in
                      ICOs/Airdrops are not supported and will be lost forever.
                      Withdrawal requests cannot be cancelled after submission.
                      Withdrawals are only supported for BEP-20 wallets, OMNI
                      wallets are not supported.
                    </small>
                    <div className="text-right">
                      <button className="btn btn-primary">Withdraw Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Withdraw;
