import React, { useContext, useEffect } from "react";
import { TransactionContext } from "../../context/Transaction";

const AllLedger = () => {
  const { callAllLedger, allLedger, setPaginationData } =
    useContext(TransactionContext);
  useEffect(() => {
    callAllLedger();
  }, []);
  useEffect(() => {
    setPaginationData(allLedger?.length);
  }, [allLedger]);

  return (
    <>
      {allLedger?.map((data, index) => {
        return (
          <tr key={index}>
            <td>#{data?._id?.slice(8, 16)}</td>
            <td>{data?.email}</td>
            <td>{data?.symbol}</td>
            <td>{data?.amount}</td>
            <td>
              {data?.Status == "approve" ? (
                <i className="la la-check text-success"></i>
              ) : data?.Status == "reject" ? (
                <i className="la la-close text-danger"></i>
              ) : (
                <i className="la la-clock text-warning"></i>
              )}
            </td>
            <td>{data?.utrDeduction} ₹</td>
            <td>{data?.finalAmount} ₹</td>
            <td>{data?.oldBalance} ₹</td>
            <td>{data?.newBalance} ₹</td>
            <td>{data?.utr}</td>
            <td>{data?.mode?.toUpperCase()}</td>
            <td>{data?.type?.toUpperCase()}</td>
            <td>{new Date(data?.updatedAt)?.toLocaleDateString()}</td>
          </tr>
        );
      })}
    </>
  );
};

export default AllLedger;
