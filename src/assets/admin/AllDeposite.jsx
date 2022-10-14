import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateDeposite } from "../../components/Admin/Logic";
import { config } from "../../constants/constants";
import { TransactionContext } from "../../context/Transaction";
import CardModal from "../card/CardModal";

const AllDeposite = ({ setRecieptImg, userData }) => {
  const { callAllDeposite, allDeposite, setPaginationData } =
    useContext(TransactionContext);
  useEffect(() => {
    callAllDeposite();
  }, []);
  useEffect(() => {
    setPaginationData(allDeposite?.length);
  }, [allDeposite]);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    depositeStatus: "",
    description: "",
    data: "",
    status: false,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateDeposite({
      utr: input.data?.utr,
      status: input.depositeStatus,
      email: input.data?.email,
      balance: input.data?.deposite,
      currency: input.data?.currency?.toUpperCase(),
      type: input.data?.type,
      description: input.description,
      actionTaken: userData?.email,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      setInput((prev) => {
        return {
          ...prev,
          status: false,
        };
      });
      setTimeout(() => {
        callAllDeposite();
      }, 400);
    } else {
      toast.error(res.message, config);
    }
  };
  return (
    <>
      {input.status && (
        <CardModal closeModal={setInput} myStyle={{ width: "50%" }}>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Enter Description</h4>
              </div>
              <div className="card-body">
                <form className="personal_validate" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-xl-12 col-md-12">
                      <label className="mr-sm-2">Enter Description</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        onChange={(e) =>
                          setInput((prev) => {
                            return { ...prev, description: e.target.value };
                          })
                        }
                        required
                      />
                    </div>
                    <div className="col-6 d-flex ">
                      <div
                        className=" col-6"
                        onClick={() =>
                          setInput((prev) => {
                            return { ...prev, status: false };
                          })
                        }
                      >
                        <button className="btn btn-success px-4">Back</button>
                      </div>
                      <div className="col-3">
                        <button className="btn btn-success px-4" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardModal>
      )}
      {allDeposite?.map((data, index) => {
        return (
          <tr key={index}>
            <td>#{data?._id?.slice(8, 16)}</td>
            <td>{data?.utr}</td>
            <td>{data?.deposite}</td>

            <td>{data?.description || "No Description"}</td>
            <td>{new Date(data?.updatedAt)?.toLocaleDateString()}</td>
            <td
              onClick={() =>
                setRecieptImg({
                  status: true,
                  data: data.reciept,
                })
              }
            >
              <fa className="fa fa-eye"></fa>
            </td>
            <td>{data?.actionTaken || "Pending"}</td>
            <td>
              {data?.status == "approve" ? (
                <i className="la la-check text-success"></i>
              ) : data?.status == "reject" ? (
                <i className="la la-close text-danger"></i>
              ) : (
                <div className="col-sm-12 col-sm-12">
                  <div className="input-group mb-3">
                    <select
                      className="form-control"
                      onChange={(e) =>
                        setInput({
                          status: true,
                          data: data,
                          depositeStatus: e.target.value,
                        })
                      }
                    >
                      <option value="pending">Pending</option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  </div>
                </div>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AllDeposite;
