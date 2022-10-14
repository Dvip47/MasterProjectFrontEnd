import React from "react";

const Blog = () => {
  return (
    <section className="blog-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Latest News</h2>
          <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/1.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">03 jan 2018</div>
                <h4 className="blog-title">
                  <p>
                    Coinbase to Reopen the GDAX Bitcoin Cash-Euro Order Book
                  </p>
                </h4>
                <div className="post-meta">
                  <p>
                    <span>by</span> Admin
                  </p>
                  <p>
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </p>
                  <p>
                    <i className="fa fa-comments-o"></i> 08 comments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/2.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 dec 2018</div>
                <h4 className="blog-title">
                  <p>
                    Blockchain Rolls Out Trading Feature for 22 States in the
                    U.S
                  </p>
                </h4>
                <div className="post-meta">
                  <p>
                    <span>by</span> Admin
                  </p>
                  <p>
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </p>
                  <p>
                    <i className="fa fa-comments-o"></i> 08 comments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-item">
              <figure className="blog-thumb">
                <img src="img/blog/3.jpg" alt="" />
              </figure>
              <div className="blog-text">
                <div className="post-date">28 aug 2018</div>
                <h4 className="blog-title">
                  <p>This Week in Bitcoin: Up, Down and Sideways</p>
                </h4>
                <div className="post-meta">
                  <p>
                    <span>by</span> Admin
                  </p>
                  <p>
                    <i className="fa fa-heart-o"></i> 234 Likes
                  </p>
                  <p>
                    <i className="fa fa-comments-o"></i> 08 comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
