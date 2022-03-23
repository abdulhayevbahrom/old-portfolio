import React, { useEffect } from "react";
import "./Header.css";
import Hdr_foto from "./header_foto.jpg";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Header() {
  useEffect(() => {
    gsap.to(".hdr_cont_img", {
        x:"370px",
      scrollTrigger: {
        trigger: ".hdr_cont_img",
        start: "top 400px",
        end: "top 0px",
        // markers: true,
        toggleActions: "restart none none reverse",
        scrub: 2,
      },
    });

    gsap.to(".hdr_cont_text", {
        x:"-390px",
      scrollTrigger: {
        trigger: ".hdr_cont_img",
        start: "top 400px",
        end: "top 200px",
        // markers: true,
        toggleActions: "restart none none reverse",
        scrub: 4,
      },
    });
  }, []);
  return (
    <header>
      <div className="header_container">
        <div className="hdr_cont_img">
          <img src={Hdr_foto} alt="rams orni" />
        </div>
        <div className="hdr_cont_text">
          <i className="text_caption">I'am Bakhromjon Abdulkhayev.</i>
          <p>
            My profession is web programming. I'am very interested in this
            profession. In order to study this profession, I studied at the
            training center "Algotim ta'lim". I'am currently involved in various
            projects. In the future, I want to become a successful specialist in
            this profession.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
