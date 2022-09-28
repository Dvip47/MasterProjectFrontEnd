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
      {page == "deposite" && (
        <Table
          header={type == "money" ? depositeHeaderMoney : depositeHeaderCrypto}
          setPage={setPage}
          page={page}
          body={deposites}
          setCurrent={setCurrent}
        />
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
      <Footer />
    </>
  );
};

export default Transaction;
