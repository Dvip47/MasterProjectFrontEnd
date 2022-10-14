import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
              <p>
                <img src="img/appstore.png" alt="" className="mr-2" />
              </p>
              <p>
                <img src="img/playstore.png" alt="" />
              </p>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <ul className="footer-nav">
                <li>
                  <p>DPA</p>
                </li>
                <li>
                  <p>Terms of Use</p>
                </li>
                <li>
                  <p>Privacy Policy </p>
                </li>
                <li>
                  <p>support@company.com</p>
                </li>
                <li>
                  <p>(123) 456-7890</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
