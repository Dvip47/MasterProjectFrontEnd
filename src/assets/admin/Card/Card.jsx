import React from "react";
const Card = ({ children, closeModal, img }) => {
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
          <p
            className="close btn-sm"
            onClick={() =>
              closeModal((prev) => {
                return { ...prev, status: false };
              })
            }
          >
            <i className="fa fa-close"></i>
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
