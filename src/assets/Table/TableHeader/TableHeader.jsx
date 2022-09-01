import React from "react";

const TableHeader = ({ header }) => {
  return (
    <thead>
      <tr>
        {header?.map((data, index) => {
          return <th key={index}>{data}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
