import React, {useEffect} from 'react'
import './About.css'
import resume from './my_resume.pdf'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    gsap.to((".about"), {
         opacity:1,
         x:0
    });
  }, []);

  const date = new Date()
  return (
    <div className='about'>
      <h1 className='h1_1'>About me</h1>
      <div className="about_me">
        <h1>I'm a<span> Front-end Developer</span>.</h1>
        <p>Hello, my name is Bahromjon, surname is Abdulhayev. I'am from Uzbekistan. I was born in 2002 in Namangan region. At the age of seven, I was admitted to the 1st grade of the secondary school No. 38 in our district.
          After graduating from high school, he studied web-programming at the training center "Algorithm education" in our region.
          I learned.
          I have been involved in various projects since graduating from the training center.
          I'am very interested in this field. In the future, I want to become a leading expert in the field.
        </p>
      </div>
      <div className="about_birth">
        <ul>
          <li><b>Birthday :</b>7 february 2002 year</li>
          <li><b>State :</b>Uzbekistan</li>
          <li><b>City :</b>Namangan</li>
        </ul>
        <ul>
          <li><b>Age :</b>{date.getFullYear() - 2002}</li>
          <li><b>Email :</b>abdulhayevbahromjon2002@gmail.com</li>
          <li><b>Phone :</b>+998 93-911-95-72</li>
        </ul>
      </div>
      <div className="about_resume">
        <a href={resume} download>Download Resume </a>
        <a href={resume} target="_blank" rel="noreferrer" >View Resume</a>
      </div>
    </div>
  )
}

export default About