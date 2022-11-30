import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { FC } from "react";
import { ContactProps } from "../../Interfaces/enum";
import './contactStyles.css'
export const Contact:FC<ContactProps> = (props) =>{
    const center = {
        lat:  33.54912118659771,
        lng:35.45244324086734
      };

const containerStyle = {
    width: '50vw',
    height: '400px',
    cursor:'pointer'
  };
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
      <input type={'text'} onChange={(e)=>props.setEmail(e.target.value)} placeholder={'Email Address'}required/>
      <textarea onChange={(e)=>props.setMessage(e.target.value)} placeholder={'Your Message'} required cols={30} rows={5} />
      <button onClick={()=>console.log('clicked')}>Send</button>
    </form>
    </div>
    </div> 
}