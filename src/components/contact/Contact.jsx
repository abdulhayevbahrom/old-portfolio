import React, {useEffect} from 'react'
import './Contact.css'
import { FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import email from './at.png'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    gsap.to(".li", {
      left:0,
      scrollTrigger: {
      trigger: ".li",
      start: "top 550px",
      end: "top 500px",
      // markers: true,
      toggleActions: "restart none none reverse",
      scrub: 5,
    },
  });

  gsap.to(".li2", {
    left:0,
    scrollTrigger: {
    trigger: ".li2",
    start: "top 550px",
    end: "top 490px",
    // markers: true,
    toggleActions: "restart none none reverse",
    scrub: 5,
  },
});

gsap.to(".li3", {
  left:0,
  scrollTrigger: {
  trigger: ".li3",
  start: "top 550px",
  end: "top 460px",
  // markers: true,
  toggleActions: "restart none none reverse",
  scrub: 5,
},

});
gsap.to(".li4", {
  left:0,
  scrollTrigger: {
  trigger: ".li4",
  start: "top 550px",
  end: "top 450px",
  // markers: true,
  toggleActions: "restart none none reverse",
  scrub: 5,
},
});

gsap.to(".li5", {
  left:0,
  scrollTrigger: {
  trigger: ".li5",
  start: "top 550px",
  end: "top 460px",
  // markers: true,
  toggleActions: "restart none none reverse",
  scrub: 5,
},
});
  },[])
  return (
    <div className='contact'>
      <div className="contact_box">
        <h1>Contact</h1>
        <ul>
          <li className='li'><a  rel="noreferrer"
                  target="_blank"
                  href="https://t.me/Bahromjon0207"><FaTelegram /> @Bahromjon0207</a></li>
          <li className='li2'><a  rel="noreferrer"
                  target="_blank" 
                  href="tel:+998 93-911-95-72"><FaPhoneAlt /> +998 93-911-95-72</a></li>
          <li className='li3'><a  rel="noreferrer"
                  target="_blank" 
                  href="https://github.com/abdulhayevbahrom"><BsGithub /> github.com/abdulhayevbahrom</a></li>
          <li className='li4'><img src={email} alt=''/> abdulhayevbahromjon2002@gmail.com</li>
          <li className='li5'> <a rel="noreferrer" 
                  target="_blank" 
                  href="https://linkedin.com/in/bahromjon-abdulhayev-883726234/"><BsLinkedin /> linkedin.com/in/bahromjon-abdulhayev-883726234/</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact