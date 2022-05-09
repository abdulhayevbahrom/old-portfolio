import React from 'react'
import './HomeInfo.css'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react'
import sectionImg from './sectionImg.jpg'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
gsap.registerPlugin(ScrollTrigger);

function HomeInfo() {
    useEffect(() => {
        gsap.to((".homeInfo"), {
            opacity: 1
        });
    }, []);
    return (
        <div className='homeInfo'>
            <h1 className='opacity'>WELCOME!</h1>
            <section>
                <div className="sectionText">
                    <h1>Hello, my name is <span>Bahromjon</span>.</h1>
                    <h1>I'm a<span> Front-end Developer</span>.</h1>
                    <p>I'am very interested in this field. That’s why I chose this field. Writing code is a lot of fun for me. In the future, I want to be a leading expert in my favorite field.</p>
                </div>
                <div className="sectionImg">
                    <BiChevronUp />
                    <BiChevronUp />
                    <img src={sectionImg} alt="My_Photo" title='my photo' />
                    <BiChevronDown />
                    <BiChevronDown />
                </div>
            </section>
        </div>
    )
}

export default HomeInfo