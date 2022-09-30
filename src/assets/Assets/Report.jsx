import React, { useContext } from "react";
import { WallteContext } from "../../context/Wallet";

const Report = ({ header }) => {
  const { walletTransaction } = useContext(WallteContext);
  return (
    <div id="report">
      <table className="table">
        <thead>
          <tr>
            {header?.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {walletTransaction?.length ? (
            walletTransaction?.map((data, index) => {
              return (
                <tr key={index}>
                  <td></td>
                </tr>
              );
            })
          ) : (
            <h3 className="text-center"> No Records Found </h3>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
