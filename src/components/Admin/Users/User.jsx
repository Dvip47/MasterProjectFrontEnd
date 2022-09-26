import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "../../../assets/admin/user/Table";
import { AdminContext } from "../../../context/AdminC";

const User = () => {
  const {
    depositeAmountData,
    AllUserData,
    callDepositeAmountData,
    callAllUser,
  } = useContext(AdminContext);
  useEffect(() => {
    callDepositeAmountData();
    callAllUser();
  }, []);
  const [depositeStatus, setDespositeStatus] = useState("select");
  const [page, setPage] = useState("deposite");
  const UserDeposite = [
    "ID",
    "Wallet",
    "UTR",
    "Email",
    "Amount",
    "Status",
    "Updated At",
    "Created At",
    "Image",
    "Action",
  ];
  const User = [
    "Email",
    "Name",
    "Phone",
    "Created At",
    "Balance",
    "Active",
    "Deposit",
    "Withdrawal",
    "Wallet",
    "Action",
  ];
  return (
    <>
      {page == "deposite" && (
        <Table
          header={UserDeposite}
          setPage={setPage}
          page={page}
          body={depositeAmountData}
          title="User Details"
          type="deposite"
          action={setDespositeStatus}
          actionValue={depositeStatus}
        />
      )}
      {page == "user" && (
        <Table
          header={User}
          setPage={setPage}
          page={page}
          body={AllUserData}
          title="User Details"
          type="user"
          call={callAllUser}
        />
      )}
    </>
  );
};

export default User;
