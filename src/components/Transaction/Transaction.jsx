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
      {page == "all" && (
        <Table header={Allheader} setPage={setPage} page={page} />
      )}
      {page == "deposite" && (
        <>
          {current.desposite ? (
            <Table header={depositeHeaderMoney} setPage={setPage} page={page} />
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
