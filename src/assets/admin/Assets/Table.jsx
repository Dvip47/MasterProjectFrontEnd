import React from "react";

const Table = ({ header }) => {
  return (
    <div id="table">
      <table className="table">
        <thead>
          <tr>
            {header?.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
