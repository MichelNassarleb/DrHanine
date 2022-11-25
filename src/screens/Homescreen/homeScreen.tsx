import React from "react";
import { HealthCare } from "../../components/healthcare/healthCare";
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
        <HealthCare
        title="WHAT WE DO"
        subtitle="True HealthCare For Your Family"
        rightSideTitle="Quality Control System"
        leftSideTitle="Quality Control System"
        rightSidedescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        leftSidedescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        buttonText="Get Appointment"
        />
    </div>
} 