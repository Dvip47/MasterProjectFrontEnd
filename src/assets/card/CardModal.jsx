import React from "react";
import "./style.css";
const CardModal = ({ children, closeModal }) => {
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
      <div className="message text-center">
        <div className="message-pop detail">
          <a
            href="#"
            className="close btn-sm"
            onClick={() =>
              closeModal((prev) => {
                return { ...prev, status: false };
              })
            }
          >
            <i className="fa fa-close"></i>
          </a>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardModal;
