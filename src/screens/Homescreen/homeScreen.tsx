import React from "react";
import { Home } from "../../components/home/home";
import { Navbar } from "../../components/navbar/navBar";
import { navData } from "../../data";
import './homeScreenStyles.css'
export const HomeScreen = () => {
    return <div className="main-container">
        
        <Navbar data={navData}/>
        <Home title="WE USE LATEST MEDICAL TECHNOLOGY"
        subtitle="LET US BRIGHTEN YOUR SMILE"
        buttonText="WHO WE ARE"
        />
    </div>
} 