import React from "react";
import "./style.css";
const CardModal = ({ children, closeModal, myStyle }) => {
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 99999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
      }}
    >
      <p
        className="close btn-sm"
        onClick={() => {
          closeModal((prev) => {
            return { ...prev, status: false };
          });
        }}
      >
        <i className="fa fa-close"></i>
      </p>
      <div className="message text-center" style={{ width: "80%", ...myStyle }}>
        <div className="message-pop detail">{children}</div>
      </div>
    </div>
  );
};

export default CardModal;
