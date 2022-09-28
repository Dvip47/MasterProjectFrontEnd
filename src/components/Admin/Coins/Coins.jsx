import React from "react";
import TableHeader from "../../../assets/admin/coins/Header";
import Body from "../../../assets/admin/coins/Body";
import { useContext } from "react";
import { TransactionContext } from "../../../context/Transaction";
import { useEffect } from "react";
import { useState } from "react";
import ListCoin from "../../../assets/admin/coins/ListCoin";
const Coins = () => {
  const { coinList, callCoins } = useContext(TransactionContext);
  useEffect(() => {
    callCoins();
  }, []);
  useEffect(() => {
    setFilteredCoin(coinList);
  }, [coinList]);
  const header = [
    "Symbol",
    "Open Price",
    "Close Price",
    "High Price",
    "Low Price",
    "Updated At",
    "Status",
    "Created At",
    "Deposite",
    "Withdrawal",
  ];
  const [pagination, setpagination] = useState({
    start: 0,
    end: 10,
    limit: 10,
  });
  const handlePagination = (type) => {
    if (type == "next") {
      if (pagination.end < coinList.length) {
        setpagination((prev) => {
          return {
            ...prev,
            start: prev.start + prev.limit,
            end: prev.end + prev.limit,
          };
        });
      }
    } else {
      if (pagination.start > 0) {
        setpagination((prev) => {
          return {
            ...prev,
            start: prev.start - prev.limit,
            end: prev.end - prev.limit,
          };
        });
      }
    }
  };
  const [filteredCoin, setFilteredCoin] = useState([]);
  const handleChange = (e) => {
    let newData = coinList.filter((data) => {
      return data?.symbol.includes(e.target.value.toUpperCase());
    });
    setFilteredCoin(newData);
  };
  const [modal, setModal] = useState({
    status: false,
  });
  return (
    <div className="card">
      {modal.status && <ListCoin closeModal={setModal} />}
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-title">Coins</h5>
          <div className="d-flex">
            <input type="text" placeholder="Search" onChange={handleChange} />
            <button
              className="btn btn-primary"
              onClick={() => setModal({ status: true })}
            >
              List Your Coin
            </button>
          </div>
        </div>
        <div className="wallet-history">
          <table className="table">
            <TableHeader header={header} />
            <Body body={filteredCoin} pagination={pagination} />
          </table>
          <div>
            <button
              className="btn btn-primary mx-3"
              onClick={() => handlePagination("prev")}
            >
              Prev
            </button>
            <button
              className="btn btn-primary mx-3"
              onClick={() => handlePagination("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
