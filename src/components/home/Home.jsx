import React, { useEffect } from "react";
import "./Home.css";
import {
  BsChevronUp,
  BsChevronDown,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
import Header from "../header/Header";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.to(".home_logo", {
      scale: 35,
      scrollTrigger: {
        trigger: ".home_logo",
        start: "top 77px",
        end: "bottom 0px",
        // markers: true,
        toggleActions: "restart none none reverse",
        scrub: 5,
      },
    });
  }, []);
  return (
    <div className="homePage">
      <div className="home">
        <div className="home_logo">
          <BsChevronUp className="up" />
          <BsChevronDown className="down" />
          <BsChevronLeft className="left" />
          <BsChevronRight className="right" />
          <div className="logo_letter">
            <div className="logo_top"></div>
            <div className="logo_bottom"></div>
          </div>
        </div>
        <div className="circle"></div>
      </div>
      <Header/>
    </div>
  );
}

export default Home;
