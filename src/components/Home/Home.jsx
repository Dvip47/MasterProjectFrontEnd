import React from "react";
import About from "../../assets/Home/About/About";
import Blog from "../../assets/Home/Blog/Blog";
import Fact from "../../assets/Home/Fact/Fact";
import Feature from "../../assets/Home/Feature/Feature";
import Footer from "../../assets/Home/Footer/Footer";
import Header from "../../assets/Home/Header/Header";
import Hero from "../../assets/Home/Hero/Hero";
import Newsletter from "../../assets/Home/Newsletter/Newsletter";
import Process from "../../assets/Home/Process/Process";
import Review from "../../assets/Home/Review/Review";
import Team from "../../assets/Home/Team/Team";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Feature />
      <Process />
      <Fact />
      <Team />
      <Review />
      <Newsletter />
      <Blog />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
// onClick={() => navigate("/credential", { state: "login" })}
