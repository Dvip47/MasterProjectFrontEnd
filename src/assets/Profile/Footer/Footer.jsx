import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
              <a href="">
                <img src="img/appstore.png" alt="" className="mr-2" />
              </a>
              <a href="">
                <img src="img/playstore.png" alt="" />
              </a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <ul className="footer-nav">
                <li>
                  <a href="">DPA</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Privacy Policy </a>
                </li>
                <li>
                  <a href="">support@company.com</a>
                </li>
                <li>
                  <a href="">(123) 456-7890</a>
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
