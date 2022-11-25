import React, { FC } from "react";
import front from '../../assets/Images/front.jpeg'
import './healthCareStyles.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HealthCareProps } from "../../Interfaces/enum";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
export const HealthCare:FC<HealthCareProps> = (props) => {
    return (<div className="healthcare-container">
        <div className="healthcare-items-container">
            <div className="square-items">
            <div className="healthcare-img-container"> <img src={front} alt='Dr-Hanine' /></div>
            <div className="healthcare-data-container">
               <div className="healthcare-title-container">
               {props.title ? <h3 children={props.title}/> : null}
                {props.subtitle ? <h1  children={props.subtitle}/> : null}
               </div>
               <div className="healthcare-under-title">
                <div className="side-container">
                    <div className="healthcare-icon-container">
                    <AddCircleIcon sx={{color: '#758592',fontSize:'40px'}} > </AddCircleIcon>
                    </div>
                   {props.leftSideTitle ? <h1 className="quality" children={props.leftSideTitle}/> : null}
                    {props.leftSidedescription ? <p children={props.leftSidedescription}/> : null}
                </div>
                <div className="side-container">
                <div className="healthcare-icon-container">
                    <LocalHospitalIcon sx={{color: '#758592',fontSize:'40px'}}></LocalHospitalIcon>
                    </div>
                    {props.rightSideTitle ? <h1 className="quality" children={props.rightSideTitle}/> : null}
                    {props.rightSidedescription ? <p children={props.rightSidedescription}/> : null}
                </div>
               </div>
               {props.buttonText ? <div className="btn-container"><button className="contact-btn"><a href='' children={props.buttonText}/></button></div>  : null}
            </div>
            </div>
        </div>
    </div>)
}