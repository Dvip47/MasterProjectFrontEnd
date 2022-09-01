import React from "react";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">General Information</h5>
        <div className="settings-profile">
          <form>
            <img src="assets/img/avatar.svg" alt="avatar" />
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
              />
              <label className="custom-file-label" htmlFor="fileUpload">
                Choose avatar
              </label>
            </div>
            <div className="form-row mt-4">
              <div className="col-md-6">
                <label htmlFor="formFirst">First name</label>
                <input
                  id="formFirst"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="formLast">Last name</label>
                <input
                  id="formLast"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="emailAddress">Email</label>
                <input
                  id="emailAddress"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber">Phone</label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="selectLanguage">Language</label>
                <select id="selectLanguage" className="custom-select">
                  <option defaultValue="Vashu">English</option>
                  <option>Mandarin Chinese</option>
                  <option>Spanish</option>
                  <option>Arabic</option>
                  <option>Russian</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="selectCurrency">Currency</label>
                <select id="selectCurrency" className="custom-select">
                  <option defaultValue="Vashu">USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>CHF</option>
                </select>
              </div>
              <div className="col-md-12">
                <input type="submit" value="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
