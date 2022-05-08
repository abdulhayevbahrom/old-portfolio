import React, { useEffect, useState } from 'react'
import './Contact.css'
import { FaTelegram, FaPhoneAlt } from 'react-icons/fa'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useEffect(() => {
    gsap.to((".contact_caption"), {
      opacity: 1
    });

    gsap.to((".contact"), {
      x: 0
    });

  }, []);

  const [username, setUsername] = useState('')
  const [lastname, setLastname] = useState('')
  const [textarea, setTextarea] = useState('')
  console.log(textarea);

  const submitToEmail = () => {
    if (username === '') {
      alert('Fill in the fields provided!')
    }
  }
  return (
    <div className='contact'>
      <h1 className='contact_caption'>Contact</h1>
      <div className="contact_container">
        <form>
          <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Username*' />
          <input value={lastname} onChange={e => setLastname(e.target.value)} type="text" placeholder='Lastname*' />
          <textarea value={textarea} onChange={e => setTextarea(e.target.value)} rows="5" placeholder='write text*...'></textarea>
          <button onClick={submitToEmail} style={username === '' || lastname === '' || textarea === '' ? { cursor: "no-drop" } : { cursor: "pointer" }} className='submitBtn'>Submit</button>
        </form>
        <hr />
        <div className="socialNetworks">
          <div className="socialNetworks_caption">
          <h3>Social Networks</h3>
          </div>
          <div className="networks">
          <a href='tel:+998939119572' rel='noreferrer' className="tg">
            <FaPhoneAlt />
            <span>+998 93-911-95-72</span>
          </a>
          <a target="_blank" href='https://t.me/Bahromjon0207' rel='noreferrer' className="tg">
            <FaTelegram />
          </a>
          <a href='https://github.com/abdulhayevbahrom' rel='noreferrer' target="_blank" className="tg">
            <BsGithub />
          </a>
          <a href='https://www.linkedin.com/in/bahromjon-abdulhayev-883726234/' target="_blank" rel='noreferrer' className="tg">
            <BsLinkedin />
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
