import React from "react";
import Header from "../Exchange/Header/Header";
import Footer from "../Home/Footer/Footer";
import Body from "./Body/Body";
import Filter from "./Filter/Filter";
import TableHeader from "./TableHeader/TableHeader";

const Table = ({ header, setPage, page }) => {
  return (
    <>
      <Header />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Transactions</h5>
          <Filter setPage={setPage} page={page} />
          <div className="wallet-history">
            <table className="table">
              <TableHeader header={header} />
              <Body />
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Table;
