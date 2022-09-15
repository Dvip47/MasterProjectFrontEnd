import React from "react";
import { useState } from "react";
import Card from "../../Card/Card";
import { updateDeposite } from "../../../../components/Admin/Logic";
import { toast } from "react-toastify";
import { config, GETWALLET } from "../../../../constants/constants";
import { postFetch } from "../../../../api/api";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminC";
const Body = ({ body = [], type, action, actionValue }) => {
  const { callDepositeAmountData } = useContext(AdminContext);
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  const handleChangeAndSubmit = async (e) => {
    action(e.target.value);
    const res = await updateDeposite({
      utr: currentDespositeDataForUpdate.utr,
      status: e.target.value,
      email: currentDespositeDataForUpdate.email,
      balance: currentDespositeDataForUpdate.deposite,
      currency: currentDespositeDataForUpdate.currency,
      type: currentDespositeDataForUpdate.type,
    });
    if (res.success) {
      toast.success(res.message, config);
      callDepositeAmountData();
    } else {
      toast.error(res.message, config);
    }
  };
  const [currentDespositeDataForUpdate, setCurrentDespositeDataForUpdate] =
    useState();
  const handleClickuser = async (data, type) => {
    if (type == "wallet") {
      const res = await postFetch(GETWALLET, { email: data.email });
      if (res.success) {
        setRecieptImg({
          status: true,
          data: res?.message,
          type: "wallet",
        });
      } else {
        toast.error(res.message, config);
      }
    } else {
      const res = await postFetch();
      setRecieptImg({
        status: true,
        data: "",
        type: "action",
      });
    }
  };
  return (
    <tbody>
      {type == "deposite" && (
        <>
          {recieptImg.status && (
            <Card closeModal={setRecieptImg}>
              <div>
                <img
                  src={recieptImg.data}
                  alt="pic"
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </div>
            </Card>
          )}
          {body?.map((data, index) => {
            return (
              <tr
                key={index}
                onClick={() => setCurrentDespositeDataForUpdate(data)}
              >
                <td>{data?._id}</td>
                <td>{data?.bankName}</td>
                <td>{data?.utr}</td>
                <td>{data?.email}</td>
                <td>{data?.deposite}</td>
                <td>{(data?.status).toUpperCase()}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td
                  onClick={() =>
                    setRecieptImg({ status: true, data: data.reciept })
                  }
                >
                  IMG
                </td>
                {data?.status == "pending" ? (
                  <td>
                    <select
                      value={actionValue}
                      onChange={handleChangeAndSubmit}
                      className="form-group"
                      style={{
                        backgroundColor: "#24a0ed",
                        color: "white",
                        padding: "3px 11px",
                        fontSize: "15px",
                        marginLeft: "6px",
                        width: "110px",
                      }}
                    >
                      <option value="select">Select</option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  </td>
                ) : data?.status == "approve" ? (
                  <td>Approved</td>
                ) : (
                  <td>Rejected</td>
                )}
              </tr>
            );
          })}
        </>
      )}
      {type == "user" && (
        <>
          {recieptImg.status && (
            <Card closeModal={setRecieptImg}>
              <div>
                <>
                  <h4 className="fontW-700 mt-2">Bank Details</h4>
                  <div className="">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Currency</th>
                          <th>Balance</th>
                          <th>Freeze Balance</th>
                          <th>Total</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recieptImg.type == "wallet" && (
                          <>
                            {recieptImg?.data?.wallet?.map((mapData, index) => {
                              return (
                                <tr key={index}>
                                  <td>{mapData?._id}</td>
                                  <td>{(mapData?.currency).toUpperCase()}</td>
                                  <td>{mapData?.balance}</td>
                                  <td>{mapData?.freezeBalance}</td>
                                  <td>{mapData?.total}</td>
                                  <td>
                                    {new Date(
                                      mapData?.date
                                    ).toLocaleDateString()}
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              </div>
            </Card>
          )}
          {body?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data?.email}</td>
                <td>{data?.name}</td>
                <td>{data?.mobile}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{data?.balance} Rs</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.active}
                    />
                  </div>
                </td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.canDeposite}
                    />
                  </div>
                </td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.canWithdraw}
                    />
                  </div>
                </td>
                <td onClick={() => handleClickuser(data, "wallet")}>O</td>
                <td onClick={() => handleClickuser(data, "action")}>O</td>
              </tr>
            );
          })}
        </>
      )}
    </tbody>
  );
};

export default Body;
