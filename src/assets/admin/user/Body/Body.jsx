import React from "react";
import { useState } from "react";
import Card from "../../Card/Card";
import { updateDeposite } from "../../../../components/Admin/Logic";
import { toast } from "react-toastify";
import { config } from "../../../../constants/constants";
const Body = ({ body = [], type, action, actionValue }) => {
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
  });
  const handleChangeAndSubmit = async (e) => {
    action(e.target.value);
    const res = await updateDeposite({ status: e.target.value });
    if (res.success) {
      toast.success(res.message, config);
    } else {
      toast.error(res.message, config);
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
              <tr key={index}>
                <td>{data?._id}</td>
                <td>{data?.bankName}</td>
                <td>{data?.utr}</td>
                <td>{data?.email}</td>
                <td>{data?.deposite}</td>
                <td>{"success"}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td
                  onClick={() =>
                    setRecieptImg({ status: true, data: data.reciept })
                  }
                >
                  IMG
                </td>
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
              <tr key={index}>
                <td>{data?.email}</td>
                <td>{data?.name}</td>
                <td>{data?.mobile}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{data?.inr || "0 Rs"}</td>
                <td>{"OK"}</td>
                <td>{"OK"}</td>
                <td>{"OK"}</td>
                <td
                  onClick={() =>
                    setRecieptImg({
                      status: true,
                      data: "",
                      type: "",
                    })
                  }
                >
                  O
                </td>
                <td
                  onClick={() =>
                    setRecieptImg({
                      status: true,
                      data: "",
                      type: "",
                    })
                  }
                >
                  O
                </td>
              </tr>
            );
          })}
        </>
      )}
    </tbody>
  );
};

export default Body;
