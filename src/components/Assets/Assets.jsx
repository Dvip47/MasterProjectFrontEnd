import React, { useContext, useEffect } from "react";
import Header from "../../assets/Assets/Header";
import Report from "../../assets/Assets/Report";
import Table from "../../assets/Assets/Table";
import "./assest.css";
import MainHeader from "../../assets/Exchange/Header/Header";
import Footer from "../../assets/Home/Footer/Footer";
import { TransactionContext } from "../../context/Transaction";
import { AuthContext } from "../../context/Auth";
const Assets = () => {
  const { coinBalance, callCoinBalance } = useContext(TransactionContext);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    if (userData?.email) {
      callCoinBalance(userData);
    }
  }, [userData]);
  const header = ["Assets", "Balance", "Total INR", "Action"];
  const reportHeader = ["From", "To", "Amount", "Type", "Status", "Time"];
  return (
    <>
      <MainHeader />
      <Header />
      <div className="d-flex assets">
        <Table header={header} body={coinBalance} />
        <Report header={reportHeader} />
      </div>
      <Footer />
    </>
  );
};

export default Assets;
