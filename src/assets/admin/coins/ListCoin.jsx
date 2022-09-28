import React from "react";
import CardModal from "../../card/CardModal";

const ListCoin = ({ closeModal }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("List Process in in progress");
    } catch (error) {
      return error;
    }
  };
  return (
    <CardModal closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="form-row mt-4">
          <div className="col-md-6">
            <label htmlFor="formFirst">Symbol</label>
            <input
              id="formFirst"
              type="text"
              className="form-control"
              placeholder="Symbol"
              name="name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailAddress">Open Price</label>
            <input
              id="emailAddress"
              type="text"
              className="form-control"
              placeholder="Open Price"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Close Price</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Close Price"
              name="mobile"
              maxLength={10}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">High Price</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="High Price"
              name="mobile"
              maxLength={10}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Low Price</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Low Price"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Contract Address</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="Contract Address"
            />
          </div>

          <div className="col-md-12">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </CardModal>
  );
};

export default ListCoin;
