import React from "react";
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import './reviewStyles.css'
import { Icon } from "@mui/material";

export const Review = () =>{
return (<div className="review-container">
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
</div>)
}