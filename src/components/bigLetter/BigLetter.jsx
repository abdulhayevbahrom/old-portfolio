import React, { useEffect } from "react";
import "./BigLetter.css";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function BigLetter() {
  useEffect(() => {
    gsap.to(".text", {
      x: -450,
      scrollTrigger: {
        trigger: ".text",
        start: "bottom 90%",
        end: "bottom 0",
        // markers:true,
        toggleActions: "restart none none reverse",
        scrub: 2,
      },
    });
  }, []);
  return (  
    <div className="big_letter">
      <h1 className="text">-
        <span className="span_red">B</span>     
        <span className="span_moviy">A</span>     
        <span className="span_yellow">H</span>     
        <span className="span_green">R</span>     
        <span className="span_red">O</span>     
        <span className="span_moviy">M</span>     
        <span className="span_yellow">J</span>     
        <span className="span_green">O</span>     
        <span className="span_color">N</span>     
        <span className="span_red">-</span>     
        <span className="span_moviy">A</span>     
        <span className="span_yellow">B</span>     
        <span className="span_green">D</span>     
        <span className="span_color">U</span>     
        <span className="span_red">L</span>     
        <span className="span_moviy">H</span>     
        <span className="span_yellow">A</span>     
        <span className="span_green">Y</span>     
        <span className="span_color">E</span>     
        <span className="span_red">V</span>  
        <span className="span_moviy">B</span>     
        <span className="span_yellow">A</span>     
        <span className="span_green">H</span>     
        <span className="span_color">R</span>     
        <span className="span_red">O</span>     
        <span className="span_moviy">M</span>     
        <span className="span_yellow">J</span>     
        <span className="span_green">O</span>     
        <span className="span_color">N</span>     
        <span>-</span>     
        <span className="span_red">A</span>     
        <span className="span_moviy">B</span>     
        <span className="span_yellow">D</span>     
        <span className="span_green">U</span>     
        <span className="span_color">L</span>     
        <span className="span_red">H</span>     
        <span className="span_moviy">A</span>     
        <span className="span_yellow">Y</span>     
        <span className="span_green">E</span>     
        <span className="span_red">V</span>     
      </h1> className="span_mov className="span_yellow" className="sppan_green"iy"
    </div>
  );
}

export default BigLetter;
