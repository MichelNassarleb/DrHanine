import React, { FC, useEffect, useState } from "react";
import logo from '../../assets/Images/teeth.png'
import { NavbarProps } from "../../Interfaces/enum";
import './navBarStyles.css'


export const Navbar:FC<NavbarProps> = (props) => {
    const nav = props.windowDimension ? 'nav' : 'withoutNavShadow'
    const detectSize = () => {
        props.onChangeDimension(window.scrollY)

    }
    useEffect(() => {

        window.addEventListener('scroll', detectSize)
        return () => {
            window.removeEventListener('scroll', detectSize)
        }

    }, [props.windowDimension])
    return (
    <div className={nav}>
    <div className="container">
        <div className="img-container">
            <img src={logo} alt='logo' />
        </div>
        <ul className="li-container">
            {props.data?.map((item,index)=><li key={index}><a href={item?.href} children={item?.name}/></li>)}
        </ul>
       <div className="bckgr">
       <button className="contact-btn"><a href="/">Get Appointment</a></button>
       </div>
    </div>
    </div>
    )
}