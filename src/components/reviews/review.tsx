import React, { FC, useEffect } from "react";
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import './reviewStyles.css'


export const Review:FC<any> = (props) =>{
    useEffect(()=>{
         setInterval(()=>{
                props.setAwards((prev:any)=>prev+1)
        },20)
    },[])

return (<div className="review-container">
    <div className="first-two-review">
<div className="review-item-container">
    <AddModeratorOutlinedIcon />
    <h1>{props?.awards < 34 ?`${props.awards}+` : `34+`}</h1>
    <p>Awards Win</p>
    <div className="review-blue-line"></div>
</div>
<div className="review-item-container">
    <AddModeratorOutlinedIcon />
    <h1>34+</h1>
    <p>Awards Win</p>
    <div className="review-blue-line"></div>
</div>
</div>
<div className="second-two-review">
<div className="review-item-container">
    <AddModeratorOutlinedIcon />
    <h1>34+</h1>
    <p>Awards Win</p>
    <div className="review-blue-line"></div>
</div>
<div className="review-item-container">
    <AddModeratorOutlinedIcon />
    <h1>34+</h1>
    <p>Awards Win</p>
    <div className="review-blue-line"></div>
</div>
</div>
</div>)
}