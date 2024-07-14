import React from "react";
import Marqee from "./components/Marqee";
import About from "./components/About";
import Eye from "./components/Eye";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Eye2 from "./components/Eye2";
import Feature2 from "./components/Feature2";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import "./index.css";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-90[vw] md:w-full  bg-zinc-900 overflow-x-hidden text-white">
      <Navbar />
      <LandingPage />
      <Marqee />
      <About />
      <Eye />
      <Feature />
      <Feature2 />
      <Cards />
      <Eye2 />
      <Footer />
    </div>
  );
}

export default App;
