import React from "react";
import Header from "../../../assets/admin/Assets/Header";
import Report from "../../../assets/admin/Assets/Report";
import Table from "../../../assets/admin/Assets/Table";
import "./assest.css";
const Assets = () => {
  const header = ["Assets", "Balance", "Total INR", "Action"];
  const reportHeader = ["From", "To", "Amount", "Type", "Status", "Time"];
  return (
    <>
      <Header />
      <div className="d-flex">
        <Table header={header} />
        <Report header={reportHeader} />
      </div>
    </>
  );
};

export default Assets;
