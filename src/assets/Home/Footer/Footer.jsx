import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row spad">
          <div className="col-md-6 col-lg-3 footer-widget">
            <img src="img/logo.png" className="mb-4" alt="" />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia dese mollit anim id est laborum.
            </p>
            <span>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script>
              All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i> by
              <p>Colorlib</p>
            </span>
          </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Resources</h5>
            <ul>
              <li>
                <p>How to Buy Coin</p>
              </li>
              <li>
                <p>Coin Overview</p>
              </li>
              <li>
                <p>Blog News</p>
              </li>
              <li>
                <p>How to Sell Coin</p>
              </li>
              <li>
                <p>Purchase Theme</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
            <h5 className="widget-title">Quick Links</h5>
            <ul>
              <li>
                <p>Network Stats</p>
              </li>
              <li>
                <p>Block Explorers</p>
              </li>
              <li>
                <p>Governance</p>
              </li>
              <li>
                <p>Exchange Markets</p>
              </li>
              <li>
                <p>Get Theme</p>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
            <h5 className="widget-title">Follow Us</h5>
            <div className="social">
              <p className="facebook">
                <i className="fa fa-facebook"></i>
              </p>
              <p className="google">
                <i className="fa fa-google-plus"></i>
              </p>
              <p className="instagram">
                <i className="fa fa-instagram"></i>
              </p>
              <p className="twitter">
                <i className="fa fa-twitter"></i>
              </p>
            </div>
          </div>
        </div>
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
