import React from "react";
import logo from '../../assets/Images/teeth.png'
import './navBarStyles.css'
export const Navbar = () => {
    return (
    <div className="nav">
    <div className="container">
        <div className="img-container">
            <img src={logo} alt='logo' />
        </div>
        <ul className="li-container">
            <li><a href="#Home"/>Home</li>
            <li><a href="#About"/>About</li>
            <li><a href="#Services"/>Services</li>
            <li><a href="#Blog"/>Blog</li> 
        </ul>
       <div className="bckgr">
       <button className="contact-btn"><a href="/">Get Appointment</a></button>
       </div>
    </div>
    </div>
    )
}