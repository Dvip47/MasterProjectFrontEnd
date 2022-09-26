import React from "react";

const Body = ({ body }) => {
  console.log(body);
  return (
    <tbody>
      {body?.map((data, index) => {
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
      })}
    </tbody>
  );
};

export default Body;
