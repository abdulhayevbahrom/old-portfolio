import React from "react";
import "./Experience.css";
import doks1 from "./doks1.jpg";
import nam from "./nam.jpg";
import texnomart from './texno.jpg'
import walmart from './walmart.jpg'
import find from './find.jpg'
import QR from './QR.jpg'
import momentum from './momentum.jpg'

function Experience() {
  return (
    <div className="experience">
      <h1 className="exp_caption">Experience</h1>
      <div className="exp_container">
          <div className="doks">
        <a className="exp_container_item" href="https://doks.uz" target="_blank" rel="noreferrer">
            <img src={doks1} alt="doks.uz" />
        </a>
            <a className="doks_link" href="https://doks.uz" rel="noreferrer" target="_blank">Doks.uz</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="http://namangan-paper.vercel.app/" rel="noreferrer" target="_blank">
            <img src={nam} alt="namangan paper" />
        </a>
            <a className="doks_link" href="http://namangan-paper.vercel.app/" rel="noreferrer" target="_blank">Namangan paper</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="https://texnomart-clone-version.vercel.app/" rel="noreferrer" target="_blank">
            <img src={texnomart} alt="texnomart" />
        </a>
            <a className="doks_link" href="https://texnomart-clone-version.vercel.app/" rel="noreferrer" target="_blank">Texnomart-clone</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="https://walmart-one.vercel.app/" rel="noreferrer" target="_blank">
            <img src={walmart} alt="walmart" />
        </a>
            <a className="doks_link" href="https://walmart-one.vercel.app/" rel="noreferrer" target="_blank">Walmart.com-clone</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="https://find-photo.netlify.app/" rel="noreferrer" target="_blank">
            <img src={find} alt="findPhoto" />
        </a>
            <a className="doks_link" href="https://find-photo.netlify.app/" rel="noreferrer" target="_blank">Find Photo</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="https://word-generator-to-qr-code.netlify.app" rel="noreferrer" target="_blank">
            <img src={QR} alt="QR_code" />
        </a>
            <a className="doks_link" href="https://word-generator-to-qr-code.netlify.app" rel="noreferrer" target="_blank">QR-code generator</a>
          </div>
          <div className="doks">
        <a className="exp_container_item" href="https://momentum-extention.netlify.app" rel="noreferrer" target="_blank">
            <img src={momentum} alt="momentum" />
        </a>
            <a className="doks_link" href="https://momentum-extention.netlify.app" rel="noreferrer" target="_blank">Momentum-extention</a>
          </div>
      </div>
    </div>
  );
}

export default Experience;
