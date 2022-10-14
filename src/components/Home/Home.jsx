import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CoinContext } from "../../context/CoinsContext";
import { AuthContext } from "../../context/Auth";
const Home = () => {
  const { coinList } = useContext(CoinContext);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const nav = [
    { title: "Home", url: "", data: "", scroll: "1" },
    { title: "Price", url: "", data: "", scroll: "2" },
    { title: "Portfolio", url: "", data: "", scroll: "3" },
    { title: "App", url: "", data: "", scroll: "4" },
    { title: "Blog", url: "", data: "", scroll: "5" },
    { title: "Support", url: "", data: "", scroll: "6" },
    { title: "Dashboard", url: "/exchange", data: "", scroll: "6" },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div id="main-wrapper" className="show">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="index.html">
                    <img src="images/logo.png" alt="" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      {nav.map((data, index) => {
                        return (
                          <li
                            className="nav-item"
                            key={index}
                            onClick={() =>
                              navigate(data.url, { state: data.data })
                            }
                          >
                            <a
                              className="nav-link"
                              data-scroll-nav={`${data.scroll}`}
                            >
                              {data.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {!userData?.email && (
                    <div className="signin-btn">
                      <a
                        className="btn btn-primary"
                        onClick={() =>
                          navigate("/credential", { state: "login" })
                        }
                      >
                        Sign in
                      </a>
                    </div>
                  )}

                  <div className="language ml-3 mr-0">
                    <button
                      className="theme-button"
                      id="themeSelector"
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro" data-scroll-index="0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="intro-content">
                <h1>
                  Trade with <strong className="text-primary">Tradio</strong>.
                  <br /> Buy and sell cryptocurrency
                </h1>
                <p>
                  Fast and secure way to purchase or exchange 150+
                  cryptocurrencies
                </p>
              </div>

              <div className="intro-btn">
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Browse Now
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="intro-form-exchange">
                <form
                  className="currency_validate"
                  action="https://tradio-html.vercel.app/signin.html"
                >
                  <div className="form-group">
                    <label className="mr-sm-2">Send</label>
                    <div className="input-group mb-3">
                      <select name="currency" className="form-control">
                        <option data-display="Bitcoin" value="bitcoin">
                          Bitcoin
                        </option>
                        <option value="litecoin">Litecoin</option>
                      </select>
                      <input
                        type="text"
                        name="usd_amount"
                        className="form-control"
                        value="125.00 USD"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="mr-sm-2">Get</label>
                    <div className="input-group mb-3">
                      <select name="currency" className="form-control">
                        <option data-display="Bitcoin" value="bitcoin">
                          Bitcoin
                        </option>
                        <option value="litecoin">Litecoin</option>
                      </select>
                      <input
                        type="text"
                        name="usd_amount"
                        className="form-control"
                        value="125.00 USD"
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-0 align-items-center">
                      <p className="mb-0">Monthly Limit</p>
                      <h6 className="mb-0">$49750 remaining</h6>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-success btn-block"
                  >
                    Exchange Now
                    <i className="la la-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="price-grid section-padding" data-scroll-index="1">
        <div className="container">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all 1s"
            transitionDuration={3500}
            containerClassName="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClassName="custom-dot-list-style"
            itemClassName="carousel-item-padding-40-px "
          >
            {coinList?.map((data, index) => {
              return (
                <div
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  key={index}
                  style={{ width: "300px" }}
                >
                  <div className="card">
                    <div className="card-header">
                      <div className="media">
                        <span>
                          <i className="cc BTC"></i>
                        </span>
                        <div className="media-body"> {data?.symbol}</div>
                      </div>
                      <p className="mb-0"> 24h</p>
                    </div>
                    <div className="card-body">
                      <h3>USD {Number(data?.volume)?.toFixed(3)}</h3>
                      <span
                        className={
                          data?.priceChangePercent > 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {data?.priceChangePercent > 0 ? "+" : ""}
                        {data?.priceChangePercent}%
                      </span>
                      <div id="btcChart"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="getstart section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title">
                <h2>Get started in a few minutes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content">
                <span>
                  <i className="la la-user-plus"></i>
                </span>
                <h3>Create an account</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content">
                <span>
                  <i className="la la-bank"></i>
                </span>
                <h3>Link your bank account</h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="getstart-content">
                <span>
                  <i className="la la-exchange"></i>
                </span>
                <h3>Start buying & selling</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-title text-center">
                <h2>Create your cryptocurrency portfolio today</h2>
                <p>
                  Tradio has a variety of features that make it the best place
                  to start trading
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6">
              <div className="portfolio_list">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="media">
                      <span className="port-icon">
                        <i className="la la-bar-chart"></i>
                      </span>
                      <div className="media-body">
                        <h4>Manage your portfolio</h4>
                        <p>
                          Buy and sell popular digital currencies, keep track of
                          them in the one place.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="media">
                      <span className="port-icon">
                        <i className="la la-calendar-check-o"></i>
                      </span>
                      <div className="media-body">
                        <h4>Recurring buys</h4>
                        <p>
                          Invest in cryptocurrency slowly over time by
                          scheduling buys daily, weekly, or monthly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="media">
                      <span className="port-icon">
                        <i className="la la-lock"></i>
                      </span>
                      <div className="media-body">
                        <h4>Vault protection</h4>
                        <p>
                          For added security, store your funds in a vault with
                          time delayed withdrawals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="media">
                      <span className="port-icon">
                        <i className="la la-mobile"></i>
                      </span>
                      <div className="media-body">
                        <h4>Mobile apps</h4>
                        <p>
                          Stay on top of the markets with the Tradio app for
                          <a href="#">Android</a>
                          or
                          <a href="#">iOS</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="portfolio_img">
                <img src="images/portfolio.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trade-app section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Trade. Anywhere</h2>
                <p>
                  All of our products are ready to go, easy to use and offer
                  great value to any kind of business
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="la la-mobile"></i>
                  </span>
                  <h4 className="card-title">Mobile</h4>
                  <p>
                    All the power of Tradio's cryptocurrency exchange, in the
                    palm of your hand. Download the Tradio mobile crypto trading
                    app today
                  </p>

                  <a href="#">
                    Know More <i className="la la-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="la la-desktop"></i>
                  </span>
                  <h4 className="card-title">Desktop</h4>
                  <p>
                    Powerful crypto trading platform for those who mean
                    business. The Tradio crypto trading experience, tailor-made
                    for your Windows or MacOS device.
                  </p>

                  <a href="#">
                    Know More <i className="la la-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="card trade-app-content">
                <div className="card-body">
                  <span>
                    <i className="la la-connectdevelop"></i>
                  </span>
                  <h4 className="card-title">API</h4>
                  <p>
                    The Tradio API is designed to provide an easy and efficient
                    way to integrate your trading application into our platform.
                  </p>

                  <a href="#">
                    Know More <i className="la la-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="promo section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center">
                <h2>The most trusted cryptocurrency platform</h2>
                <p> Here are a few reasons why you should choose Tradio</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <img
                    className="img-fluid"
                    src="images/svg/protect.svg"
                    alt=""
                  />
                </div>
                <h3>Secure storage </h3>
                <p>
                  We store the vast majority of the digital assets in secure
                  offline storage.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <img
                    className="img-fluid"
                    src="images/svg/cyber.svg"
                    alt=""
                  />
                </div>
                <h3>Protected by insurance</h3>
                <p>
                  Cryptocurrency stored on our servers is covered by our
                  insurance policy.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="promo-content">
                <div className="promo-content-img">
                  <img
                    className="img-fluid"
                    src="images/svg/finance.svg"
                    alt=""
                  />
                </div>
                <h3>Industry best practices</h3>
                <p>
                  Tradio supports a variety of the most popular digital
                  currencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="appss section-padding" data-scroll-index="4">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6 col-md-6">
              <div className="appss-content">
                <h2>The secure app to store crypto yourself</h2>
                <ul>
                  <li>
                    <i className="la la-check"></i> All your digital assets in
                    one place
                  </li>
                  <li>
                    <i className="la la-check"></i> Use Decentralized Apps
                  </li>
                  <li>
                    <i className="la la-check"></i> Pay friends, not addresses
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="#" className="btn btn-primary my-1 waves-effect">
                    <img src="images/android.svg" alt="" />
                  </a>
                  <a href="#" className="btn btn-primary my-1 waves-effect">
                    <img src="images/apple.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="appss-img">
                <img className="img-fluid" src="images/app2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog section-padding" data-scroll-index="5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img className="img-fluid" src="images/blog/1.jpg" alt="" />
                  <div className="card-body">
                    <a href="404-2.html">
                      <h4 className="card-title">
                        Why does Litecoin need MimbleWimble?
                      </h4>
                    </a>
                    <p className="card-text">
                      Cras chinwag brown bread Eaton cracking goal so I said a
                      load of old tosh baking cakes.!
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="meta-info">
                      <a href="#" className="author">
                        <img src="images/avatar/5.jpg" alt="" /> Admin
                      </a>
                      <a href="#" className="post-date">
                        <i className="la la-calendar"></i> 31 July,
                        <script>
                          var CurrentYear = new Date().getFullYear()
                          document.write(CurrentYear)
                        </script>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img className="img-fluid" src="images/blog/2.jpg" alt="" />
                  <div className="card-body">
                    <a href="404-2.html">
                      <h4 className="card-title">
                        How to securely store your HD wallet seeds?
                      </h4>
                    </a>
                    <p className="card-text">
                      Cras chinwag brown bread Eaton cracking goal so I said a
                      load of old tosh baking cakes.!
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="meta-info">
                      <a href="#" className="author">
                        <img src="images/avatar/6.jpg" alt="" /> Admin
                      </a>
                      <a href="#" className="post-date">
                        <i className="la la-calendar"></i> 31 July,
                        <script>
                          var CurrentYear = new Date().getFullYear()
                          document.write(CurrentYear)
                        </script>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="blog-grid">
                <div className="card">
                  <img className="img-fluid" src="images/blog/3.jpg" alt="" />
                  <div className="card-body">
                    <a href="404-2.html">
                      <h4 className="card-title">
                        Exclusive Interview With Xinxi Wang Of Litecoin
                      </h4>
                    </a>
                    <p className="card-text">
                      Cras chinwag brown bread Eaton cracking goal so I said a
                      load of old tosh baking cakes.!
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="meta-info">
                      <a href="#" className="author">
                        <img src="images/avatar/7.jpg" alt="" /> Admin
                      </a>
                      <a href="#" className="post-date">
                        <i className="la la-calendar"></i> 31 July,
                        <script>
                          var CurrentYear = new Date().getFullYear()
                          document.write(CurrentYear)
                        </script>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="get-touch section-padding" data-scroll-index="6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title">
                <h2>Get in touch. Stay in touch.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <div className="media">
                  <span>
                    <i className="fa fa-shield"></i>
                  </span>
                  <div className="media-body">
                    <h4>24 / 7 Support</h4>
                    <p>
                      Got a problem? Just get in touch. Our support team is
                      available 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <div className="media">
                  <span>
                    <i className="fa fa-cubes"></i>
                  </span>
                  <div className="media-body">
                    <h4>Tradio Blog</h4>
                    <p>
                      News and updates from the world’s leading cryptocurrency
                      exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <div className="media">
                  <span>
                    <i className="fa fa-certificate"></i>
                  </span>
                  <div className="media-body">
                    <h4>Careers</h4>
                    <p>
                      Help build the future of technology. Start your new career
                      at Tradio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="get-touch-content">
                <div className="media">
                  <span>
                    <i className="fa fa-life-ring"></i>
                  </span>
                  <div className="media-body">
                    <h4>Community</h4>
                    <p>
                      Tradio is global. Join the discussion in our worldwide
                      communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="bottom-logo">
                <img className="pb-3" src="images/logo.png" alt="" />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Our Partner</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <a href="#">Ticket</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Helpdesk</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Exchange Pair</h4>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <ul>
                      <li>
                        <a href="#">ETH to BTC</a>
                      </li>
                      <li>
                        <a href="#">BTC to ETH</a>
                      </li>
                      <li>
                        <a href="#">LTC to ETH</a>
                      </li>
                      <li>
                        <a href="#">USDT to BTC</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <ul>
                      <li>
                        <a href="#">BTC to USDT</a>
                      </li>
                      <li>
                        <a href="#">LTC to BTC</a>
                      </li>
                      <li>
                        <a href="#">XMR to BTC</a>
                      </li>
                      <li>
                        <a href="#">ETC to DASH</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright">
                <p>
                  © Copyright
                  <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>
                  <a href="#">Tradio</a> I All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
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
    </div>
  );
};

export default Home;
