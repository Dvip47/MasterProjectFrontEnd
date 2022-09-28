import React from "react";

const Report = ({ header }) => {
  return (
    <div id="report">
      <table className="table">
        <thead>
          {header?.map((data, index) => (
            <th key={index}>{data}</th>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Report;
