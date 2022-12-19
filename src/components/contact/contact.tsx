import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { FC, useEffect } from "react";
import { ContactProps } from "../../Interfaces/enum";
import './contactStyles.css'
export const Contact:FC<ContactProps> = (props) =>{
    const center = {
        lat:  33.54912118659771,
        lng:35.45244324086734
      };

const containerStyle = props.windowWidth < 1001 ? {
    width: '100vw',
    height: '400px',
    cursor:'pointer'
  } : 
  {
    width: '50vw',
    height: '400px',
    cursor:'pointer'
  }
  const emailRegex = /^(?:[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const btnClassName = props.message && props.email && props.fullname && emailRegex.test(props.email) ? 'contact-form-button' : 'btn-disabled'
useEffect(()=>{
  console.log( !props.message && !props.email && !props.fullname)
  console.log(emailRegex.test(props.email))
},[props.message,props.email,props.fullname])
    return <div className="contact-container">
      <div className="map-container">
      <LoadScript
    googleMapsApiKey={props.apikey}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onClick={()=>props.onClickMap(center.lat,center.lng)}
    >
      { /* Child components, such as markers, info windows, etc. */ }
    </GoogleMap>
    </LoadScript>
    </div>
    <div className="contact-email-container">
      <h3>CONTACT US</h3>
      <h1>HAVE QUESTIONS?</h1>
      <h2 style={{marginBottom:'20px'}}>Get In Touch!</h2>
    <form className="contact-form" onSubmit={(e)=>{
      e.preventDefault() 
      console.log('submitted')
    }}
      >
      <input type={'text'} onChange={(e)=>props.setFullName(e.target.value)} placeholder={'Full Name'} required/>
      <input type={'text'} style={props.email && !emailRegex.test(props.email) ? {border: '1px solid rgb(242, 62, 62)'} : {}} onChange={(e)=>props.setEmail(e.target.value)} placeholder={'Email Address'}required/>
      {props.email && !emailRegex.test(props.email) && <p className="validationText">Please enter a valid email</p>}
      <textarea onChange={(e)=>props.setMessage(e.target.value)} placeholder={'Your Message'} required cols={30} rows={5} />
      <button disabled={!props.message && !props.email && !props.fullname } className={btnClassName}>Send</button>
    </form>
    </div>
    </div> 
}