import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Header from "../../../assets/Exchange/Header/Header";
import Footer from "../../../assets/Profile/Footer/Footer";
import { WallteContext } from "../../../context/Wallet";

const Deposite = () => {
  const { adminbankList } = useContext(WallteContext);
  const [input, setInput] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped border mt-5">
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {adminbankList?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.bankName}</td>
                      <td>{data.accountNumber}</td>
                      <td>{data.ifscCode}</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input type="checkbox" style={{ zIndex: -99 }} />
                        </div>
                      </td>
                      <td onClick={() => {}}>{data.ifscCode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposite;
