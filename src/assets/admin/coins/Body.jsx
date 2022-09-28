import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../../api/api";
import { config, UPDATECOINPERMISSION } from "../../../constants/constants";
import { TransactionContext } from "../../../context/Transaction";

const Body = ({ body, pagination }) => {
  const { callCoins } = useContext(TransactionContext);
  const navigate = useNavigate();
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
    <tbody>
      {body?.slice(pagination.start, pagination.end)?.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data?.symbol}</td>
            <td>{data?.openPrice?.toFixed(2)} Rs</td>
            <td>{data?.closePrice?.toFixed(2)} Rs</td>
            <td>{data.highPrice?.toFixed(2)} Rs</td>
            <td>{data?.lowPrice?.toFixed(2)} Rs</td>
            <td>{new Date(data?.createdAt).toLocaleTimeString()} </td>
            <td>{data?.status}</td>
            <td>{new Date(data?.createdAt).toLocaleDateString()}</td>
            <td>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  style={{ zIndex: -99 }}
                  checked={data.canDeposit}
                  name="canDeposit"
                  onChange={(e) => updateCoin(e, data)}
                />
              </div>
            </td>
            <td>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  style={{ zIndex: -99 }}
                  checked={data.canWithdrawal}
                  name="canWithdrawal"
                  onChange={(e) => updateCoin(e, data)}
                />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default Body;
