import React, { FC } from "react";
import './medicalCareStyles.css'
import cosmeticImg from '../../assets/Images/cosmetic.jpg'

export const MedicalCare:FC<any> = (props) =>{
    return  <div className="medicalcare-container">
        <div className="medicalcare-square">
        <div className="medicalcare-top-container">
            <h3>WHAT WE DO</h3>
            <h1>Providing Medical Care For The Sickest In Our Community</h1>
        </div>
        <div className="medicalcare-bottom-container">
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={cosmeticImg} alt='Cosmetic'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Cosmestic Dentistry</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
        </div>
        </div>
    </div>
}