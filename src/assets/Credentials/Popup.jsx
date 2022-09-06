import React from "react";

const Popup = ({ setPop, navigate }) => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: 99,
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          width: "30%",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px 30px",
        }}
      >
        <h6 style={{ textAlign: "center", lineHeight: "24px" }}>
          Verification Email sent to your mail, Please Verify to complete signup
          process.
        </h6>
        <button
          style={{
            marginTop: "3%",
            padding: "5px 20px",
            borderRadius: "4px",
            borderColor: "rgb(51,51,51)",
            textTransform: "uppercase",
            fontWeight: "700",
            backgroundColor: "#000000",
            color: "#ffffff",
          }}
          onClick={() => {
            setPop(false);
            navigate("/");
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Popup;
