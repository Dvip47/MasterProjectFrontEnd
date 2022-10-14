import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../api/api";
import { config, UPDATECOINPERMISSION } from "../../constants/constants";
import { TransactionContext } from "../../context/Transaction";

const AdminCoin = () => {
  const { coinList, callCoins } = useContext(TransactionContext);
  const navigate = useNavigate();
  useEffect(() => {
    callCoins();
  }, [callCoins]);
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
    end: 6,
    limit: 6,
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
  const handleChange = (e) => {
    let newData = coinList.filter((data) => {
      return data?.symbol.includes(e.target.value.toUpperCase());
    });
    setFilteredCoin(newData);
  };
  const [filteredCoin, setFilteredCoin] = useState([]);
  const updateCoin = async (e, dataa) => {
    const data = {
      [e.target.name]: e.target.checked,
      symbol: dataa.symbol,
    };
    const res = await postFetch(UPDATECOINPERMISSION, data);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      callCoins();
    } else {
      toast.error(res.message, config);
    }
  };
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Admin Bank List</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {header.map((data, index) => (
                      <th key={index}>{data}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {coinList
                    ?.slice(pagination.start, pagination.end)
                    ?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data?.symbol}</td>
                          <td>{data?.openPrice?.toFixed(2)} Rs</td>
                          <td>{data?.closePrice?.toFixed(2)} Rs</td>
                          <td>{data.highPrice?.toFixed(2)} Rs</td>
                          <td>{data?.lowPrice?.toFixed(2)} Rs</td>
                          <td>
                            {new Date(data?.createdAt).toLocaleTimeString()}
                          </td>
                          <td>{data?.status}</td>
                          <td>
                            {new Date(data?.createdAt).toLocaleDateString()}
                          </td>
                          <td>
                            <label className="toggle">
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                                checked={data.canDeposit}
                                name="canDeposit"
                                onChange={(e) => updateCoin(e, data)}
                              />
                              <span className="toggle-switch"></span>
                            </label>
                          </td>
                          <td>
                            <label className="toggle">
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                                checked={data.canWithdrawal}
                                name="canWithdrawal"
                                onChange={(e) => updateCoin(e, data)}
                              />
                              <span className="toggle-switch"></span>
                            </label>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex  align-center justify-center">
          <div className=" col-3" onClick={() => handlePagination("prev")}>
            <button
              className="btn btn-success px-4"
              disabled={pagination.start == 0}
            >
              Prev
            </button>
          </div>

          <div className="col-3" onClick={() => handlePagination("next")}>
            <button className="btn btn-success px-4" type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCoin;
