import React from 'react'
import './Skils.css'
import {FiCheck} from 'react-icons/fi'
import { useEffect } from 'react'
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Skils() {
    useEffect(() => {
        gsap.to((".skils_container"), {
            //  opacity:1,
             y:0
        });
      }, []);
  return (
    <div className='skils'>
        <h1 className='skilsOpacity'>SKILS</h1>
        <div className="skils_container" >
            <div className="skils_top"></div>
            <h3>My Skils</h3>
            <ul>
                <li>HTML   <FiCheck/> </li>
                <li>CSS  <FiCheck/> </li>
                <li>SASS  <FiCheck/></li>
                <li>BOOTSTRAP  <FiCheck/></li>
                <li>TAILWIND CSS  <FiCheck/></li>
                <li>GIT  <FiCheck/></li>
                <li>GITHUB  <FiCheck/></li>
                <li>JAVASCRIPT  <FiCheck/></li>
                <li>REACT  <FiCheck/></li>
                <li>REACT-ROUTER  <FiCheck/></li>
                <li>NPM  <FiCheck/></li>
                <li>FIREBASE  <FiCheck/></li>
                <li>AXIOS & FETCH  <FiCheck/></li>
                <li>REDUX  <FiCheck/></li>
                <li>GSAP  <FiCheck/></li>

            </ul>
        </div>
    
    </div>
  )
}

export default Skils