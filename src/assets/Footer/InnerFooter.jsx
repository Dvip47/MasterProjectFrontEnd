import React from "react";

const InnerFooter = () => {
  return (
    <div className="footer dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 col-12">
            <div className="copyright">
              <p>
                © Copyright
                <script>
                  var CurrentYear = new Date().getFullYear()
                  document.write(CurrentYear)
                </script>
                <a href="https://themeforest.net/user/quixlab/portfolio">
                  Quixlab
                </a>
                I All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-sm-4 col-12">
            <div className="footer-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerFooter;
