import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'
import {IoHome} from 'react-icons/io5'
import {FaUserTie} from 'react-icons/fa'  
import {GiSkills} from 'react-icons/gi'
import {ImStatsBars} from 'react-icons/im' 
import {TiMessages} from 'react-icons/ti' 
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import sidebar_logo from './sidebar_logo.jpg'
gsap.registerPlugin(ScrollTrigger);

function Sidebar() {
    useEffect(() => {
        gsap.to((".sidebar"), {
             x: "0px",
        });
      }, []);

  return (
    <div className='sidebar'>
        <div className="sidebarLogo">
            <Link to="/"><img src={sidebar_logo} alt="" /></Link>
        </div> 
        <div className="sidebarLinks">
            <NavLink exact to="/" activeStyle={{color:"#FF463F"}} className='sidebar_link_item'><IoHome/> <span>Home</span></NavLink>
            <NavLink to="/about" activeStyle={{color:"#FF463F"}} className='sidebar_link_item'><FaUserTie/> <span>About</span> </NavLink>
            <NavLink to="/skils" activeStyle={{color:"#FF463F"}} className='sidebar_link_item'><GiSkills/> <span>Skils</span> </NavLink>
            <NavLink to="/experience" activeStyle={{color:"#FF463F"}} className='sidebar_link_item'><ImStatsBars/> <span>Experience</span> </NavLink>
            <NavLink to="/contact" activeStyle={{color:"#FF463F"}} className='sidebar_link_item'><TiMessages/> <span>Contact</span> </NavLink>
        </div>
    </div>
  )
}

export default Sidebar