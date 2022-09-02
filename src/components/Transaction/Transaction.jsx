import React from "react";
import { useState } from "react";
import Table from "../../assets/Table/Table";

const Transaction = () => {
  const [page, setPage] = useState("all");
  const [current, setCurrent] = useState({
    desposite: true,
    withdraw: true,
    order: true,
  });
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
    "ID",
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
    "Update Date",
  ];
  const depositeHeaderCrypto = [
    "ID",
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
    "Update Date",
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
    "Crated",
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
      {page == "all" && <Table header={Allheader} />}
      {page == "deposite" && (
        <>
          {current.desposite ? (
            <Table header={depositeHeaderMoney} />
          ) : (
            <Table header={depositeHeaderCrypto} />
          )}
        </>
      )}
      {page == "withdraw" && (
        <>
          {current.withdraw ? (
            <Table header={WithdrawHeaderMoney} />
          ) : (
            <Table header={WithdrawHeaderCrypto} />
          )}
        </>
      )}
      {page == "order" && (
        <>
          {current.order ? (
            <Table header={OrderHeaderMoney} />
          ) : (
            <Table header={OrderHeaderCrypto} />
          )}
        </>
      )}
    </>
  );
};

export default Transaction;