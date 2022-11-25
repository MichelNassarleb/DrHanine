import React, { FC } from "react";
import './medicalCareStyles.css'
import cosmeticImg from '../../assets/Images/cosmetic.jpg'
import pediatric from '../../assets/Images/pediatric.webp'
import ortho from '../../assets/Images/ortho.jpg'
import dentalImplant from '../../assets/Images/dentalimplant.jpg'
import pain from '../../assets/Images/pain.jpg'
export const MedicalCare:FC<any> = (props) =>{
    return  <div className="medicalcare-container">
        <div className="medicalcare-square">
        <div className="medicalcare-top-container">
            <h3>WHAT WE DO</h3>
            <h1>Providing Medical Care For The Sickest In Our Community</h1>
        </div>
        <div className="medicalcare-bottom-container">
            <div className="medicalcare-bottom-top-sec">
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={cosmeticImg} alt='Cosmetic'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Cosmestic Dentistry</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={dentalImplant} alt='dental implant'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Dental Implant</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={pain} alt='pain mgt'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Pain Management</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
            </div>
            <div className="medicalcare-bottom-bottom-sec">
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={ortho} alt='ortho'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Orthodontic</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
            <div className="medicalcare-item-container">
                <div className="medicalcare-img-container">
                <img src={pediatric} alt='Cosmetic'/>
                </div>
                <div className="medicalcare-text-container">
                    <h1>Pediatric</h1>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog MTV quiz graced</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
}