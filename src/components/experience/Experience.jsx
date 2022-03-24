import React from "react";
import "./Experience.css";
import { Link } from "react-router-dom";
import doks1 from "./doks1.jpg";
import nam from "./nam.jpg";

function Experience() {
  return (
    <div className="experience">
      <h1 className="exp_caption">Experience</h1>
      <div className="exp_container">
        <a rel="noreferrer"  href="http://www.doks.uz" target="_blank" alt='' >
          <div className="doks">
            <div className="doks_caption">
              <Link>doks.uz</Link>
            </div>
            <img
              src={doks1}
              className="exp_item_img"
              alt="doks.uz"
              title="doks.uz"
            />
          </div>
        </a>
        <a  href="http://namangan-paper.vercel.app" rel="noreferrer"  target="_blank">
          <div className="doks">
          <div className="doks_caption">
              <Link>namangan-peper</Link>
            </div>
            <img
              src={nam}
              className="exp_item_img"
              alt="doks.uz"
              title="doks.uz"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Experience;
