import React , {useEffect} from "react";
import "./Skils.css";
import html from "./html-5.png";
import css from "./css-3.png";
import scss from "./sass.png";
import bootstrap from "./Bootstrap_logo.svg.png";
import github from './github.png'
import git from './git-icon.svg'
import js from './js.png'
import react from './react.svg'
import firebase from './firebase.svg'
import redux from './redux.svg'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Skils() {
    useEffect(() => {
        gsap.to(".skils_container", {
            y:"288px",
            opacity:"1",
            // rotateZ:"0deg",
          scrollTrigger: {
            trigger: ".skils_container",
            start: "top 300px",
            end: "top 100px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".html", {
            x:"419px",
          scrollTrigger: {
            trigger: ".html",
            start: "top 400px",
            end: "top 280px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".css", {
            x:"382px",
          scrollTrigger: {
            trigger: ".css",
            start: "top 455px",
            end: "top 280px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });


        gsap.to(".scss", {
            x:"444px",
          scrollTrigger: {
            trigger: ".scss",
            start: "top 490px",
            end: "top 270px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".bootstrap", {
            x:"507px",
          scrollTrigger: {
            trigger: ".bootstrap",
            start: "top 520px",
            end: "top 320px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".github", {
            x:"570px",
          scrollTrigger: {
            trigger: ".github",
            start: "top 500px",
            end: "top 380px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".git", {
            x:"-396px",
          scrollTrigger: {
            trigger: ".git",
            start: "top 400px",
            end: "top 280px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".js", {
            x:"-375px",
          scrollTrigger: {
            trigger: ".js",
            start: "top 455px",
            end: "top 280px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".react", {
            x:"-442px",
          scrollTrigger: {
            trigger: ".react",
            start: "top 490px",
            end: "top 270px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".firebase", {
            x:"-496px",
          scrollTrigger: {
            trigger: ".firebase",
            start: "top 520px",
            end: "top 320px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });

        gsap.to(".redux", {
            x:"-570px",
          scrollTrigger: {
            trigger: ".redux",
            start: "top 500px",
            end: "top 380px",
            // markers: true,
            toggleActions: "restart none none reverse",
            scrub: 4,
          },
        });
    },[])


  return (
    <div className="skils">
      <div className="skils_container">
        <h1>My</h1>
        <h1>Skils</h1>
      </div>
      <div className="html">
        <div className="item">
          <h2>Html</h2>
          <img src={html} alt="" />
        </div>
      </div>
      <div className="css">
        <div className="item">
          <h2>Css</h2>
          <img src={css} alt="" />
        </div>
      </div>
      <div className="scss">
        <div className="item">
          <h2>Scss</h2>
          <img src={scss} alt="" />
        </div>
      </div>
      <div className="bootstrap">
        <div className="item">
          <h2>Bootstrap</h2>
          <img src={bootstrap} alt="" />
        </div>
      </div>
      <div className="github">
        <div className="item">
          <h2>Git Hub</h2>
          <img src={github} alt="git hub" />
        </div>
      </div>
      <div className="git">
        <div className="item">
          <h2>Git</h2>
          <img src={git} alt="git" />
        </div>
      </div>
      <div className="js">
        <div className="item">
          <h2>Java Script</h2>
          <img src={js} alt="git" />
        </div>
      </div>
      <div className="react">
        <div className="item">
          <h2>React Js</h2>
          <img src={react} alt="react" />
        </div>
      </div>
      <div className="firebase">
        <div className="item">
          <h2>Firebase</h2>
          <img src={firebase} alt="firebase" />
        </div>
      </div>
      <div className="redux">
        <div className="item">
          <h2>Redux</h2>
          <img src={redux} alt="redux" />
        </div>
      </div>
    </div>
  );
}

export default Skils;
