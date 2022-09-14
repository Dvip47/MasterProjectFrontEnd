import React from "react";
import Header from "../../Exchange/Header/Header";
import Body from "./Body/Body";
import Filter from "./Filter/Filter";
import TableHeader from "./TableHeader/TableHeader";

const Table = ({
  header,
  setPage,
  page,
  body,
  title,
  type,
  action,
  actionValue,
}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Filter setPage={setPage} page={page} />
          <div className="wallet-history">
            <table className="table">
              <TableHeader header={header} />
              <Body
                body={body}
                type={type}
                action={action}
                actionValue={actionValue}
              />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
