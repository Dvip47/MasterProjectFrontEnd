import React from "react";
import { useState } from "react";
import "./addBank.css";

function AddBank() {
  const [value, setValue] = useState("");

  return (
    <>
      <form>
        <div className="container">
          <center>
            {" "}
            <h1> Add Your Bank</h1>{" "}
          </center>

          <label> Bank Name </label>
          <input
            type="text"
            name="bankname"
            placeholder="Bank Name"
            size="25"
            required
          />
          <label> Account Number: </label>
          <input
            type="number"
            name="accNumber"
            placeholder="Account Number"
            size="16"
            required
          />
          <label> IFSC: </label>
          <input
            type="text"
            name="ifsc"
            placeholder="IFSC"
            size="15"
            pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
            required
          />
        </div>

        <button type="submit" className="registerbtn">
          Register
        </button>
      </form>
    </>
  );
}

export default AddBank;
