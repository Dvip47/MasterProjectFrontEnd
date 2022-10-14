import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../api/api";
import { config, UPDATEKYC } from "../../constants/constants";
import { AdminContext } from "../../context/AdminC";
import CardModal from "../card/CardModal";
const UserKyc = () => {
  const navigate = useNavigate();
  const kyc = [
    "ID",
    "Email",
    "Name",
    "Status",
    "Pan",
    "Pan Num",
    "Adhar Back",
    "Adhar Front",
    "Adhar Num",
    "User Img",
    "Action",
  ];
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  const { AllUserData, callAllUser } = useContext(AdminContext);
  useEffect(() => {
    callAllUser();
  }, []);
  const handleKyc = async (type, data) => {
    const res = await postFetch(UPDATEKYC, { kyc: type, email: data.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      setTimeout(() => {
        callAllUser();
      }, 400);
    } else {
      toast.error(res.message, config);
    }
  };
  return (
    <>
      {recieptImg.status && (
        <CardModal closeModal={setRecieptImg} myStyle={{ width: "50%" }}>
          <div className="card profile_card ">
            <div className="card-body ">
              <img
                src={recieptImg.data}
                alt="info"
                height="200px"
                width="200px"
              />
            </div>
          </div>
        </CardModal>
      )}
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Transactions</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {kyc.map((data, index) => (
                      <th key={index}>{data}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AllUserData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>#{data?._id?.slice(8, 16)}</td>
                        <td>{data?.email}</td>
                        <td>{data?.name}</td>
                        <td>
                          {data?.kyc == "approve" ? (
                            <i className="la la-check text-success"></i>
                          ) : data?.kyc == "reject" ? (
                            <i className="la la-close text-danger"></i>
                          ) : (
                            <i className="la la-clock text-warning"></i>
                          )}
                        </td>
                        <td
                          onClick={() =>
                            setRecieptImg({ status: true, data: data.pan })
                          }
                        >
                          <fa className="fa fa-eye"></fa>
                        </td>
                        <td>{data.panNumber}</td>
                        <td
                          onClick={() =>
                            setRecieptImg({
                              status: true,
                              data: data.adharBack,
                            })
                          }
                        >
                          <fa className="fa fa-eye"></fa>
                        </td>
                        <td
                          onClick={() =>
                            setRecieptImg({
                              status: true,
                              data: data.adharFront,
                            })
                          }
                        >
                          <fa className="fa fa-eye"></fa>
                        </td>
                        <td>{data.adharNumber}</td>
                        <td
                          onClick={() =>
                            setRecieptImg({
                              status: true,
                              data: data.uniqueNumber,
                            })
                          }
                        >
                          <fa className="fa fa-eye"></fa>
                        </td>
                        {data?.kyc == "pending" ? (
                          <td>
                            <div className="form-group col-xl-12 col-md-6">
                              <label className="mr-sm-6">Action</label>
                              <select
                                className="form-control"
                                name="action"
                                onChange={(e) =>
                                  handleKyc(e.target.value, data)
                                }
                              >
                                <option value="">Select</option>
                                <option value="approve">Approve</option>
                                <option value="reject">Reject</option>
                              </select>
                            </div>
                          </td>
                        ) : (
                          <td>
                            {data?.kyc == "approve" ? (
                              <i className="la la-check text-success"></i>
                            ) : (
                              <i className="la la-close text-danger"></i>
                            )}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserKyc;
