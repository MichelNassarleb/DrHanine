import React, { FC } from "react";
import { HomeProps } from "../../Interfaces/enum";
import './homeStyles.css'

export const Home:FC<HomeProps> = (props) =>{
    return<div className="home-container">
        <div className="home-items-container">
        {props.title ? <h3>{props.title}</h3> : null}
        {props.subtitle ? <h1>{props.subtitle}</h1> : null}
        <h1>YOUR SMILE</h1>
        {props.buttonText ? <div className="btn-container"><button className="contact-btn"><a href='' children={props.buttonText}/></button></div>  : null}
        </div>
    </div>
}