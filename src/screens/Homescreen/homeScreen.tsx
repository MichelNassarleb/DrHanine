import React, { useState } from "react";
import { HealthCare } from "../../components/healthcare/healthCare";
import { Home } from "../../components/home/home";
import { MedicalCare } from "../../components/medicalcare/medicalCare";
import { Meet } from "../../components/meet/meet";
import { Navbar } from "../../components/navbar/navBar";
import { Review } from "../../components/reviews/review";
import { navData } from "../../data";
import './homeScreenStyles.css'
export const HomeScreen = () => {

    const [windowDimension,setWindowDimension] = useState<number>(1)
    return <div className="main-container">
        
        <Navbar data={navData} windowDimension={windowDimension} onChangeDimension={setWindowDimension}/>
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
        <MedicalCare />
        <Meet />
        <Review />
    </div>
} 