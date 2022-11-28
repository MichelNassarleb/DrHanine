import React from "react";
import meetPic from '../../assets/Images/meet.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import './meetStyles.css'
export const Meet = () =>{
    return(<div className="meet-container">
        <div className="meet-top-section">
        <h3>MEET OUR TEAM</h3>
        <h1>Meet Our Doctors</h1>
        </div>
        <div className="meet-bottom-section">
            <div className="meet-item-container">
        <div className="meet-img-container">
            <img src={meetPic}/>
        </div>
        <div className="meet-text-container">
        <h1>Hanine Nassar</h1>
        <p>Dentist Expert</p>
        <div className="meet-icon-container">
        <FacebookIcon />
        <TwitterIcon />
        <GoogleIcon />
        <InstagramIcon />
        </div>
        </div>
            </div>
        </div>
    </div>)
}