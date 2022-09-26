import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Header from "../../assets/Exchange/Header/Header";
import Table from "../../assets/Table/Table";
import { AuthContext } from "../../context/Auth";
import { TransactionContext } from "../../context/Transaction";

const Transaction = () => {
  const { callDeposite, deposites } = useContext(TransactionContext);
  const { userData } = useContext(AuthContext);
  const [page, setPage] = useState("all");
  const [current, setCurrent] = useState({
    desposite: true,
    withdraw: true,
    order: true,
  });
  useEffect(() => {
    callDeposite(userData);
  }, []);
  const Allheader = [
    "ID",
    "TXN ID",
    "Remark",
    "Date",
    "Open Amount",
    "Amount",
    "Close Amount",
  ];
  const depositeHeaderMoney = [
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
  ];
  const depositeHeaderCrypto = [
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
  ];
  const WithdrawHeaderMoney = [
    "ID",
    "Symbol",
    "Amount",
    "Status",
    "UTR",
    "Deduction",
    "Final Amount",
    "Created At",
  ];
  const WithdrawHeaderCrypto = [
    "ID",
    "Symbol",
    "Amount",
    "Status",
    "TXN Hash",
    "Charge",
    "Final Amount",
    "Created At",
  ];
  const OrderHeaderMoney = [
    "ID",
    "TXN ID",
    "Price",
    "Quantity",
    "Total Quantity",
    "Status",
    "Symbol",
    "Type",
    "Created",
    "Action",
  ];
  const OrderHeaderCrypto = [
    "ID",
    "Order ID",
    "Match ID",
    "Match Ladger ID",
    "Symbol",
    "Price",
    "Remain Quantity",
    "Total Quantity",
    "Order Price",
    "Date",
  ];
  return (
    <>
      <Header />
      {page == "all" && (
        <Table header={Allheader} setPage={setPage} page={page} />
      )}
      {page == "deposite" && (
        <>
          {current.desposite ? (
            <Table
              header={depositeHeaderMoney}
              setPage={setPage}
              page={page}
              body={deposites}
            />
          ) : (
            <Table
              header={depositeHeaderCrypto}
              setPage={setPage}
              page={page}
            />
          )}
        </>
      )}
      {page == "withdraw" && (
        <>
          {current.withdraw ? (
            <Table header={WithdrawHeaderMoney} setPage={setPage} page={page} />
          ) : (
            <Table
              header={WithdrawHeaderCrypto}
              setPage={setPage}
              page={page}
            />
          )}
        </>
      )}
      {page == "order" && (
        <>
          {current.order ? (
            <Table header={OrderHeaderMoney} setPage={setPage} page={page} />
          ) : (
            <Table header={OrderHeaderCrypto} setPage={setPage} page={page} />
          )}
        </>
      )}
    </>
  );
};

export default Transaction;
