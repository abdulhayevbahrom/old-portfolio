import React from 'react'
import './Skils.css'
import html from './html.png'
import css from './css-3.png'
import sass from './sass.png'
import bootstrap from './Bootstrap.png'
import github from './github4.png'
import git from './git-icon.svg'
import js from './js.png'
import react from './react.svg'
import firebase from './firebase.svg'
import gsapF from './gsap.jpg'
import npm from './npm_logo.png'
import redux from './redux.svg'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Skils() {
    useEffect(() => {
        gsap.to((".skils"), {
            x: 0
        });
    }, []);

    return (
        <div className='skils'>
            <h1 className='skilsOpacity'>SKILLS</h1>
                <h1 className='skils_caption'>Skills</h1>
            <div className="skils_container">
                <div className="html html1">
                    <img src={html} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html css">
                    <img src={css} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html sass">
                    <img src={sass} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html bootstrap">
                    <img src={bootstrap} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html github">
                    <img src={github} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html git" >
                    <img src={git} alt="" />
                    {/* <p>html</p> */}
                </div>
            </div>
            <div className="skils_container">
            <div className="html js">
                    <img src={js} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html react">
                    <img src={react} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html firebase">
                    <img src={firebase} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html gsap">
                    <img src={gsapF} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html npm">
                    <img src={npm} alt="" />
                    {/* <p>html</p> */}
                </div>
                <div className="html redux">
                    <img src={redux} alt="" />
                    {/* <p>html</p> */}
                </div>
            </div>
        </div>
    )
}

export default Skils
