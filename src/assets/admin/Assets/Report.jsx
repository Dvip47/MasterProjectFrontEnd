import React from "react";

const Report = ({ header }) => {
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
      </table>
    </div>
  );
};

export default Report;
