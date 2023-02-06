import React from "react";
import MyPhoto from "../images/image_formals_cropped.jpg";
import "./Info.css"
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import About from "./About";

export default function Info() {
    return (
        <div className="TopCard">
            <img src={MyPhoto} alt="MyPhoto" />
            <h1>Pranav Krishna</h1>
            <h2>Full Stack Developer</h2>
            <Button className="Email"
                onClick={(email) => {
                    window.location = 'mailto:pranavkrishna@live.com'
                }}
                sx={{ textTransform: 'none' }}
                variant="contained" startIcon={<MailOutlineIcon />}>Email</Button>
            <Button className="LinkedIn"
                onClick={(email) => {
                    window.open('https://www.linkedin.com/in/pranav-krishna-03062492/', '_blank');
                }}
                sx={{ textTransform: 'none' }}
                variant="contained" startIcon={<LinkedInIcon />}>LinkedIn</Button>
            <About />
        </div>
    );
}