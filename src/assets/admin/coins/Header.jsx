import React from "react";

const Header = ({ header }) => {
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

export default Header;
