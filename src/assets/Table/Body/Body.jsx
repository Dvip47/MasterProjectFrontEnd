import React, { useContext } from "react";
import { TransactionContext } from "../../../context/Transaction";
const Body = ({ body, page }) => {
  const { type, status } = useContext(TransactionContext);

  return (
    <tbody>
      {body?.length ? (
        page == "deposite" &&
        body?.map((data, index) => {
          if (type == "money") {
            if (data.type == "money") {
              if (status == "all") {
                return (
                  <tr key={index}>
                    <td>{data?._id?.slice(-5)}</td>
                    <td>{data?.utr}</td>
                    <td>{data?.amount}</td>
                    <td>{data?.Status}</td>
                    <td>{data?.description}</td>
                    <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                  </tr>
                );
              } else if (status == "success") {
                if (data.Status == "approve") {
                  return (
                    <tr key={index}>
                      <td>{data?._id?.slice(-5)}</td>
                      <td>{data?.utr}</td>
                      <td>{data?.amount}</td>
                      <td>{data?.Status}</td>
                      <td>{data?.description}</td>
                      <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                    </tr>
                  );
                }
              } else if (status == "pending") {
                if (data.Status == "pending") {
                  return (
                    <tr key={index}>
                      <td>{data?._id?.slice(-5)}</td>
                      <td>{data?.utr}</td>
                      <td>{data?.amount}</td>
                      <td>{data?.Status}</td>
                      <td>{data?.description}</td>
                      <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                    </tr>
                  );
                }
              } else {
                if (data.Status == "reject") {
                  return (
                    <tr key={index}>
                      <td>{data?._id?.slice(-5)}</td>
                      <td>{data?.utr}</td>
                      <td>{data?.amount}</td>
                      <td>{data?.Status}</td>
                      <td>{data?.description}</td>
                      <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                    </tr>
                  );
                }
              }
            }
          } else {
            if (data.type !== "money") {
              return (
                <tr key={index}>
                  <td>{data?._id?.slice(-5)}</td>
                  <td>{data?.utr}</td>
                  <td>{data?.amount}</td>
                  <td>{data?.Status}</td>
                  <td>{data?.description}</td>
                  <td>{new Date(data?.updatedAt).toLocaleDateString()}</td>
                </tr>
              );
            }
          }
        })
      ) : (
        <div>No Records Found</div>
      )}
    </tbody>
  );
};

export default Body;
