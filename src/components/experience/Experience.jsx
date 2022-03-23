import React from "react";
import "./Experience.css";
import {Link} from 'react-router-dom'

function Experience() {
  return (
    <div className="experience">
      <h1 className="exp_caption">Experience</h1>
      <div className="exp_container">
        <Link target="_blank" to="www.doks.uz">
         <div className="doks">
           <h2  className="exp_item_caption">doks.uz</h2>
           <img className="exp_item_img" src="" alt="doks.uz" title="doks.uz" />
         </div>
        </Link>
         <div className="paper">
           <h2  className="exp_item_caption">namangan_paper</h2>
           <img className="exp_item_img" src="" alt="namangan_paper" title="namangan_paper" />
         </div>
      </div>
    </div>
  );
}

export default Experience;
