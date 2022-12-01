import React, { useEffect, useState } from "react";
import { Contact } from "../../components/contact/contact";
import { HealthCare } from "../../components/healthcare/healthCare";
import { Home } from "../../components/home/home";
import { MedicalCare } from "../../components/medicalcare/medicalCare";
import { Meet } from "../../components/meet/meet";
import { Navbar } from "../../components/navbar/navBar";
import { Review } from "../../components/reviews/review";
import { navData } from "../../data";
import './homeScreenStyles.css'
export const HomeScreen = () => {
    const API_KEY = 'AIzaSyAgrRmCcvLHL1eSm555t8CmtfJOIsdWlr8'
    const [windowDimension,setWindowDimension] = useState<number>(1)
    const onClickMap= (lat:number,lng:number) =>{
        window.open("https://maps.google.com?q="+lat+","+lng);
      }
    const [isOpened,setIsOpened] = useState<boolean>(false)
    const [fullName,setFullName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    const [awards,setAwards] = useState<number>(0)
    const onMenuClick = () =>{
        setIsOpened(prev=>!prev)
    }
    const dropdownlist = windowDimension ? 'dropdownlist smalldropdownlist' : 'dropdownlist'
    const dropClass = isOpened ? dropdownlist : `${dropdownlist} zeroHeight`

    const [windowSize, setWindowSize] = useState<number>(0);
    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(window.innerWidth);
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    return <div className="main-container">
        <div className="nav-bar">
        <Navbar data={navData} windowDimension={windowDimension} onChangeDimension={setWindowDimension} isOpened={isOpened} onPress={onMenuClick}/>
         <div className={dropClass}>
        <ul className="homescreen-li-container">
            {navData?.map((item,index)=><li key={index}><a href={item?.href} children={item?.name}/></li>)}
        </ul>
        </div> : null

        
        </div>
        <Home title="WE USE LATEST MEDICAL TECHNOLOGY"
        subtitle="LET US BRIGHTEN"
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
        <Review awards={awards} setAwards={setAwards}/>
        <Contact apikey={API_KEY} 
                 onClickMap={onClickMap} 
                 setFullName={setFullName}
                 setEmail={setEmail}
                 setMessage={setMessage}
                 windowWidth={windowSize}
        />
    </div>
} 