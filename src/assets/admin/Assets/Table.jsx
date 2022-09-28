import React from "react";

const Table = ({ header }) => {
  return (
    <div id="table">
      <table className="table">
        <thead>
          {header?.map((data, index) => (
            <th key={index}>{data}</th>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Table;
