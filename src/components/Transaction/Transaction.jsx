import React, { useEffect, useContext, useState } from "react";
import Header from "../../assets/Exchange/Header/Header";
import Footer from "../../assets/Home/Footer/Footer";
import Table from "../../assets/Table/Table";
import { AuthContext } from "../../context/Auth";
import { TransactionContext } from "../../context/Transaction";

const Transaction = () => {
  const { callDeposite, deposites, type } = useContext(TransactionContext);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    callDeposite(userData);
  }, [userData]);
  const [page, setPage] = useState("deposite");
  const [current, setCurrent] = useState({
    desposite: true,
    withdraw: true,
    order: true,
  });

  const depositeHeader = [
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
  ];

  const WithdrawHeader = [
    "ID",
    "Symbol",
    "Amount",
    "Status",
    "UTR/ID",
    "Charge",
    "Final Amount",
    "Created At",
  ];

  const OrderHeader = [
    "ID",
    "Symbol",
    "Price",
    "Quantity",
    "Total Quantity",
    "Status",
    "Created",
    "Action",
  ];

  return (
    <>
      <Header />
      {page == "deposite" && (
        <Table
          header={depositeHeader}
          setPage={setPage}
          page={page}
          body={deposites}
          setCurrent={setCurrent}
        />
      )}
      {page == "withdraw" && (
        <Table header={WithdrawHeader} setPage={setPage} page={page} />
      )}
      {page == "order" && (
        <Table header={OrderHeader} setPage={setPage} page={page} />
      )}
      <Footer />
    </>
  );
};

export default Transaction;
