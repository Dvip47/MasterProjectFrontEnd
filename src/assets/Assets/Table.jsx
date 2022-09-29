import React, { useContext, useState } from "react";
import { WallteContext } from "../../context/Wallet";

const Table = ({ header, body }) => {
  const { setWalletTransaction } = useContext(WallteContext);
  const handlePagination = (type) => {
    if (type == "next") {
      if (pagination.end < body.length) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start + pagination.limit,
            end: pagination.end + pagination.limit,
          };
        });
      }
    } else {
      if (pagination.start >= 10) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start - pagination.limit,
            end: pagination.end - pagination.limit,
          };
        });
      }
    }
  };
  const [pagination, setPagination] = useState({
    start: 0,
    end: 10,
    limit: 10,
  });
  return (
    <div id="table">
      <table className="table">
        <thead>
          <tr>
            {header?.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body
            ?.sort((a, b) => b.balance - a.balance)
            ?.slice(pagination.start, pagination.end)
            ?.map((data, index) => {
              return (
                <tr key={index} onClick={() => setWalletTransaction(data)}>
                  <td>{data.symbol}</td>
                  <td>{data.balance}</td>
                  <td>{data.total}</td>
                  <td>
                    <i className="fa fa-wallet"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
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
  );
};
export default Table;
