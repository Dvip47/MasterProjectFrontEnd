import React from "react";

const Transactions = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Latest Transactions</h5>
        <div className="wallet-history">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>25-04-2019</td>
                <td>
                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                </td>
                <td>4.5454334</td>
              </tr>
              <tr>
                <td>2</td>
                <td>25-05-2019</td>
                <td>
                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                </td>
                <td>0.5484468</td>
              </tr>
              <tr>
                <td>3</td>
                <td>25-06-2019</td>
                <td>
                  <i className="icon ion-md-close-circle-outline red"></i>
                </td>
                <td>2.5454545</td>
              </tr>
              <tr>
                <td>4</td>
                <td>25-07-2019</td>
                <td>
                  <i className="icon ion-md-checkmark-circle-outline green"></i>
                </td>
                <td>1.45894147</td>
              </tr>
              <tr>
                <td>3</td>
                <td>25-08-2019</td>
                <td>
                  <i className="icon ion-md-close-circle-outline red"></i>
                </td>
                <td>2.5454545</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
